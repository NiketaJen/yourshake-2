import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getCartTotal } from "./reducer"
import { useHistory } from 'react-router';

function Subtotal() {
    let history = useHistory();
    const[{cart}] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="btn_light_subtotal" onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
