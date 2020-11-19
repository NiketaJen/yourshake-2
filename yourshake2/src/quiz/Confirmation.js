import React from 'react'
import "../css/Confirmation.css"

function Confirmation() {
    return (
        <div className="confirmation">
            <div className="confirmation__main">
                <h1 className="confirmation__title">Success!</h1>
            </div>

            <div className="confirmation__p">
                <span className="confirmation__pLineOne"><p>Thank you for your submission</p></span>
                <span className="confirmation__pLineTwo"><p>Personalized product selection will be available in the future</p></span>
            </div>
        </div>
    )
};

export default Confirmation
