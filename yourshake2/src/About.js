import React from 'react'
import "./css/About.css"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link, useHistory } from "react-router-dom"

function About() {
    let history = useHistory();
    
    const handleQuiz =() => {
        history.push('/quiz')
    }
    return (
        <div className="about">
            
            <div className="about__left">
                {/* <div className="about__icon">
                    <Link to="/">
                        <span className="about__iconX">
                            <HighlightOffIcon/>
                        </span>
                    </Link>
                </div> */}
                
                    <div className="about__title">
                        <span className="about__titleLineOne">YOUR SHAKE'S</span>
                        <span className="about__titleLineTwo">motto is</span>
                        <span className="about__titleLineThree">Nutrition Made Easy</span>
                    </div>
                    <div className="about__p">
                        <p>We don't make nutrition, but we help you to find nutritional products easily. 
                            We understand there are a thousand and one products available for you to choose, but by taking our short survey 
                            telling us what you want and need, we will provide a listing of the best products available for you.
                            By putting the products yiu want and need in front of you, it allows you to save time and money so you can get
                            back to being you. That's who we are because we are you.
                        </p>
                    </div>
                    <div className="about__btn">
                        <button className="about__btn btn_dark" onClick={handleQuiz}>Take The Quiz</button>
                    </div>
            
             
            </div>
            <div className="about__right"></div>
        </div>
    )
}

export default About
