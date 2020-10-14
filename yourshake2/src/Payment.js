import React, {useState, useEffect} from 'react'
import "./css/Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import {Link, useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "./axios";
import {db} from "./firebase"


function Payment() {
    let history = useHistory()

    const[{cart, user}, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    const[address1, setAddress1] = useState('')
    const[address2, setAddress2] = useState('')
    const[country, setCountry] = useState('')
    const[state, setState] = useState('')
    const[zip, setZip] = useState('')

    useEffect(() => {
        // runs when the basket changes
        // generates the stripe secret which allows us to charge a card
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currency subunits...if dollars, they want cents
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [cart])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const updateUser = (e) => {
        e.preventDefault();

        db
        .collection('users')
        .doc(user?.uid)
        .set({
            address1: address1, 
            address2: address2, 
            country: country,
            state: state, 
            zip: zip, 
        },{merge: true})
    }

    const handleSubmit = async (e) => {
        // stripe code 
        e.preventDefault();
        setProcessing(true); //allows user to only click buy button once

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

          setSucceeded(true);
          setError(null)
          setProcessing(false)

          dispatch({
              type: 'EMPTY_CART'
          })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        // listens to changes on card element
        // and display any errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }



    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to ="/checkout">{cart?.length} items</Link>
                    )
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.firstName}</p>
                        <form onSubmit={updateUser}>
                            <input type="text" placeholder="Street Address" onChange={e => setAddress1(e.target.value)} value={address1} />  
                            <input type="text" placeholder="Apartment, suite, building, floor" onChange={e => setAddress2(e.target.value)} value={address2} />
                            <input type="text" placeholder="State" onChange={e => setState(e.target.value)} value={state}  /> 
                            <input type="text" placeholder="Country" onChange={e => setCountry(e.target.value)} value={country} /> 
                            <input type="text" placeholder="Zip Code" onChange={e => setZip(e.target.value)} value={zip}  /> 

                            <button  type="submit" className="payment__addressButton btn_light">Submit</button> 
                        </form>
                    </div>
                </div>
                {/* payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* cart products */}
                        {cart.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                key={item.id}
                                companyName={item.companyName}
                                productName={item.productName}
                                mainImage={item.mainImage}
                                price={item.price}
                            />
                        ))}
                    </div>
                    
                </div>
                {/* payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe goes here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button className="btn_dark" disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                    
                </div>

            </div>
        </div>
    )
};

export default Payment
