import React, {useContext} from 'react'
import "../css/SecondStep.css"
import {multiStepContext} from "../StepContex"

function SecondStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <div className="secondStep">
            <div className="secondStep__goal">
                 
                 <h2>What is your main fitness goal?</h2>
                    <label className="container__label">Lose Weight
                    <input type="radio"  name="goal" value={userData['lose weight']} onChange={(e) => setUserData({...userData, "lose weight" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Build Mass
                    <input type="radio" name="goal" value={userData['build mass']} onChange={(e) => setUserData({...userData, "build mass" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Stay Fit
                    <input type="radio" name="goal" value={userData['stay fit']} onChange={(e) => setUserData({...userData, "stay fit" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Supplement My Nutrition
                    <input type="radio" name="goal" value={userData['supplement my nutrition']} onChange={(e) => setUserData({...userData, "supplement my nutrition" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
            </div>
            {/* <div>
                <input type="radio" value="Lose Weight" name="goals" /> Lose Weight
                <input type="radio" value="Build Mass" name="goals" /> Build Mass
                <input type="radio" value="stay fit" name="goals" /> Stay Fit
                <input type="radio" value="Supplement My Nutrition" name="goals" /> Supplement My Nutrition
            </div> */}
            <div className="secondStep__athlete">
                
                <h2>Are you a ...</h2>
                    <label className="container__label">Athlete
                    <input type="radio"  name="athlete" value={userData['athlete']} onChange={(e) => setUserData({...userData, "athlete" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Fitness Enthusiast
                    <input type="radio" name="athlete" value={userData['fitness enthusiast']} onChange={(e) => setUserData({...userData, "fitness enthusiast" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Body Builder
                    <input type="radio" name="athlete" value={userData['body builder']} onChange={(e) => setUserData({...userData, "body builder" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Runner
                    <input type="radio" name="athlete" value={userData['runner']} onChange={(e) => setUserData({...userData, "runner" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Vegetarian/Vegan
                    <input type="radio" name="athlete" value={userData['vegetarian/vegan']} onChange={(e) => setUserData({...userData, "vegetarian/vegan" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Other
                    <input type="radio" name="athlete" value={userData['other']} onChange={(e) => setUserData({...userData, "other" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
            </div>
            {/* <div>
                <input type="radio" value="Athlete" name="athlete" /> Athlete
                <input type="radio" value="Fitness Enthusiast" name="athlete" /> Fitness Enthusiast
                <input type="radio" value="Body Builder" name="athlete" /> Body Builder
                <input type="radio" value="Runner" name="athlete" /> Runner
                <input type="radio" value="Vegan" name="athlete" /> Vegan
                <input type="radio" value="Other" name="athlete" /> Other
            </div> */}

            <div className="secondStep__protein">
                
                <h2>What type of protein do you prefer?</h2>
                    <label className="container__label">Whey
                    <input type="radio"  name="protein" value={userData['whey']} onChange={(e) => setUserData({...userData, "whey" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Casein
                    <input type="radio" name="protein" value={userData['casein']} onChange={(e) => setUserData({...userData, "casein" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Soy
                    <input type="radio" name="protein" value={userData['soy']} onChange={(e) => setUserData({...userData, "soy" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Plant-Based
                    <input type="radio" name="protein" value={userData['plant-based']} onChange={(e) => setUserData({...userData, "plant-based" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
            </div>
            {/* <div>
                <input type="radio" value="Whey" name="protein" /> Whey
                <input type="radio" value="Casein" name="protein" /> Casein
                <input type="radio" value="Soy" name="protein" /> Soy
                <input type="radio" value="Plant-based" name="protein" /> Plant-based
            </div> */}
            <div className="quiz__btn">
                <button className="back_btn btn_dark" onClick={() => setStep(1)} >Back</button>
                <button className="next_btn btn_light" onClick={() => setStep(3)} >Next</button>
            </div>
            
        </div>
    )
}

export default SecondStep
