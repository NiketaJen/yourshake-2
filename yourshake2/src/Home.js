import React from 'react'
import "./css/Home.css"

function Home() {
    return (
        <div className="home">

            <div className="home__title">
                <span className="home__titleLineOne">Nutrition made easy,</span>
                <span className="home__titleLineTwo">period.</span>
            </div>

            <div className="home__subtitle">
                <p><span className="home__subtitleLogo">Your Shake</span> connects you to the best protein supplements based on your specific needs.</p>
            </div>
            <div className="home__buttons">
                <button className="btn_dark3">What Is Your Shake</button>
                <button className="btn_dark">Take The Quiz</button>
            </div>
            <div className="home__brands">
                <div className="home__brandsTitle">
                    Featured Brands
                </div>
                <div className="home__brandsList">
                    <p>Muscle Milk</p>
                    <p>Muscle Milk</p>
                    <p>Muscle Milk</p>
                    <p>Muscle Milk</p>
                    <p>Muscle Milk</p>
                </div>
            </div>
        </div>
    )
}

export default Home
