import React from 'react'
import "./css/Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider'

function Checkout() {
    const[{cart, user}, dispatch] = useStateValue();
    return (
         <div  className="checkout">
            <div className="checkout__left">
             
              <div> 
                  <h3>Hello, {user?.email}</h3>
                  <h2 className="checkout__title">Your Shopping Cart</h2>
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

          <div className="checkout__right">
              <Subtotal/>
          </div>
      </div>
    )
}

export default Checkout
