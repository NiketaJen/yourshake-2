import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from "./StateProvider" 

function CheckoutProduct({id, companyName, productName, price, mainImage}) {
    const[{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type:"REMOVE_FROM_CART",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
              <img
            className="checkoutProduct__image"
            src={mainImage}
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__companyName">
                    {companyName}
                </p>
                <p className="checkoutProduct__productName">
                    {productName}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div> */}
                <button className="checkoutProduct__removeBtn btn_light3" onClick={removeFromCart}>Remove from Cart</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
