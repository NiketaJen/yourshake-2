import React from 'react'
import "./css/Footer.css"

function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
                <div className="footer__title">
                    Keep in touch
                </div>
                <p className="footer__p">
                    Your Shake is new and we are constantly improving our website, 
                    adding additional products, and more. 
                    Be the first to be in the know.
                </p>
                <input 
                className="footer_input"
                type="text"
                placeholder="Best Email Address"

                />
                
           </div>
         <div className="footer__right">
                <div className="footer__header">Contact Us</div>
                <div className="footer__header">Social</div>
                <div className="footer__header">Suggestions</div>
        </div>         
        </div>
    )
}

export default Footer
