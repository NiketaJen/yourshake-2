import React from 'react'
import "./css/Order.css"
import moment from "moment"
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({order}) {
    return (
        <div className="order">
                        <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    key={item.id}
                    companyName={item.companyName}
                    productName={item.productName}
                    mainImage={item.mainImage}
                    price={item.price}
                    hideButton
                />
            ))}
             <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />  
        </div>
    )
}

export default Order
