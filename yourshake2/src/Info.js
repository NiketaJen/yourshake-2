import React from 'react'
import "./css/Info.css"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from "react-router-dom"

function Info() {
    return (
        <div className="info">
             <div className="info__container">
                <div className="info__icon">
                    <Link to="/">
                        <span className="info__iconX">
                            <HighlightOffIcon/>
                        </span>
                    </Link>
                </div>
                <div className="info__title">
                    <span className="info__titleLineOne">What are Protien Supplements</span>
                    {/* <span className="info__titleLineTwo">motto is</span> */}
                    {/* <span className="info__titleLineThree">Nutrition Made Easy</span> */}
                </div>
                <div className="info__p">
                    <p>Protein powder is a popular nutritional supplement. 
                        Protein is an essential macronutrient that helps build muscle, repair tissue, and make enzymes and hormones. 
                        Using protein powder may also aid weight loss and help people tone their muscles.
                        There are many different types of protein powder, including dairy-based and plant-based powders.
                    </p>
                    
                </div>
                <div className="info__btn">
                     <button className="info__btn btn_dark">Take The Quiz</button>
                </div>

            </div>
        </div>
    )
}

export default Info
