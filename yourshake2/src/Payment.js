import React from 'react'
import "./css/Payment.css"
import {useStripe, useElements} from "@stripe/react-stripe-js"


function Payment() {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <div className="payment">
            <h1>Payment page biatch!!</h1>
        </div>
    )
};

export default Payment
