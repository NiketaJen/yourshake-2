import React, {useContext} from 'react'
import "../css/ThirdStep.css"
import {multiStepContext} from "../StepContex"
import {useHistory} from "react-router-dom"

function ThirdStep() {
    const{setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    let history = useHistory()

    function handleSubmit(){
        submitData();
        history.replace('/confirmation')
    }

    return (
        <div className="thirdStep">
            <div className="thirdStep__select">
                <h2>Any Allergies?</h2>
                    <label className="container">Corn
                    <input type="checkbox" value={userData['corn']} onChange={(e) => setUserData({...userData, "corn" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Caffeine
                    <input type="checkbox" value={userData['caffeine']} onChange={(e) => setUserData({...userData, "caffeine" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Egg
                    <input type="checkbox" value={userData['egg']} onChange={(e) => setUserData({...userData, "egg" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Milk
                    <input type="checkbox" value={userData['milk']} onChange={(e) => setUserData({...userData, "milk" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Peanut
                    <input type="checkbox" value={userData['peanut']} onChange={(e) => setUserData({...userData, "peanut" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Gluten
                    <input type="checkbox" value={userData['gluten']} onChange={(e) => setUserData({...userData, "gluten" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Iron
                    <input type="checkbox" value={userData['iron']} onChange={(e) => setUserData({...userData, "iron" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Sugar
                    <input type="checkbox" value={userData['sugar']} onChange={(e) => setUserData({...userData, "sugar" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Tree Nut
                    <input type="checkbox" value={userData['tree nut']} onChange={(e) => setUserData({...userData, "tree nut" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">None
                    <input type="checkbox" value={userData['none']} onChange={(e) => setUserData({...userData, "none" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                {/* <label>
                Any Allergies?
                <select multiple={true} value={[]}>
                    <option value="Corn">Corn</option>
                    <option value="Caffeine">Caffeine</option>
                    <option value="Egg">Egg</option>
                    <option value="Milk">Milk</option>
                    <option value="Peanut">Peanut</option>
                    <option value="Gluten">Gluten</option>
                    <option value="Iron">Iron</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Tree Nut">Tree Nut</option>
                    <option value="None">None</option>
                </select>
                </label> */}
            </div>

            <div className="thirdStep__select">
                 <h2>What are your preferred flavors:</h2>
                    <label className="container">Chocolate
                    <input type="checkbox" value={userData['chocolate']} onChange={(e) => setUserData({...userData, "chocolate" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Vanilla
                    <input type="checkbox" value={userData['vanilla']} onChange={(e) => setUserData({...userData, "vanilla" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Strawberry
                    <input type="checkbox" value={userData['strawberry']} onChange={(e) => setUserData({...userData, "strawberry" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Banana
                    <input type="checkbox" value={userData['banana']} onChange={(e) => setUserData({...userData, "banana" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Cookies n Creme
                    <input type="checkbox" value={userData['cookies n creme']} onChange={(e) => setUserData({...userData, "cookies n creme" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Peanut Butter
                    <input type="checkbox" value={userData['peanut butter']} onChange={(e) => setUserData({...userData, "peanut butter" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Coffee
                    <input type="checkbox" value={userData['coffee']} onChange={(e) => setUserData({...userData, "coffee" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">I'm open to explore new flavors
                    <input type="checkbox" value={userData['im open to explore new flavors']} onChange={(e) => setUserData({...userData, "im open to explore new flavors" : e.target.value})}/>
                    <span className="checkmark"></span>
                    </label>
                {/* <label>
                What are your preferred flavors:
                <select multiple={true} value={[]}>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Banana">Banana</option>
                    <option value="Cookies n Cream">Cookies n Cream</option>
                    <option value="Peanut Butter">Peanut Butter</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Sugar">Sugar</option>
                    <option value="I'm open to explore new flavors">I'm open to explore new flavors</option>
                </select>
                </label> */}
            </div>
            <div className="quiz__btn">
                <button className="back_btn btn_dark"onClick={() => setStep(2)} >Back</button>
                <button className="next_btn btn_light"onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ThirdStep
