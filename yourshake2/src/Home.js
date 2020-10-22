import React from 'react'
import "./css/Home.css"
import { useHistory } from "react-router-dom"

function Home() {

    let history = useHistory()  


    const handleClick =() => {
        history.push('/about')
    }

    const handleQuiz =() => {
        history.push('/quiz')
    }

    return (
        <div className="home">
            <div className="home__hero">
            <div className="home__title">
                <span className="home__titleLineOne"><h3>Nutrition made easy,</h3></span>
                <span className="home__titleLineTwo"><h3>period.</h3></span>
            </div>

            <div className="home__subtitle">
                <p><span className="home__subtitleLogo">Your Shake</span> connects you to the best protein supplements based on your specific needs.</p>
            </div>
            <div className="home__buttons">
                <button className="btn_dark3" onClick={handleClick}>What Is Your Shake</button>
                <button className="btn_dark" onClick={handleQuiz}>Take The Quiz</button>
            </div>
            </div>
            <div className="home__brands">
                <div className="home__brandsTitle">
                    Featured Brands
                </div>
                <div className="home__brandsList">
                    <p className="home__brandsName">Muscle Milk</p>
                    <p className="home__brandsName">Muscle Milk</p>
                    <p className="home__brandsName">Muscle Milk</p>
                    <p className="home__brandsName">Muscle Milk</p>
                    <p className="home__brandsName">Muscle Milk</p>
                </div>
            </div>
        </div>
    )
}

export default Home
