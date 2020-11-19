import React, {useContext} from 'react'
import "../css/FirstStep.css"
import Icon from '@material-ui/core/Icon';
import {multiStepContext} from "../StepContex"

function FirstStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <div className="firstStep">
           
                <div className="firstStep__gender">
                <h2>What gender do you most identify with?</h2> 
                <label className="container__label">Male 
                    <input type="radio"  name="group1" value={userData['male']} onClick={(e) => setUserData('male')} />
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">Female 
                    <input type="radio"  name="group1" value={userData['female']} onClick={(e) => setUserData('female')} />
                    <span className="checkmark"></span>
                    </label>
                  
                </div>
                {/* <Icon className="fas fa-mars" /> */}
                {/* <Icon className="fas fa-venus" /> */}
           
            <div className="firstStep__title" >
               
               <h2>Are you currently pregnant or breastfeeding?</h2>
                    <label className="container__label">Yes
                    <input type="radio" name="group2" value={userData['yes']} onClick={(e) => setUserData(e.target.value)} />
                    <span className="checkmark"></span>
                    </label>
                    <label className="container__label">No
                    <input type="radio" name="group2" value={userData['no']} onClick={(e) => setUserData(e.target.value)}/>
                    <span className="checkmark"></span>
                    </label>
            </div>
            {/* onChange={(e) => setUserData({...userData, "yes" : e.target.value})} */}
            {/* onChange={(e) => setUserData({...userData, "no" : e.target.value})} */}
            {/* <div onChange={(e) => setUserData}>
                <input type="radio" value="Yes" name="pregnant" /> Yes
                <input type="radio" value="No" name="pregnant" /> No
            </div> */}
          {/* onClick={(e) => setUserData({...userData, value})} */}

            <div className="quiz__btnFirst ">
                <button className="next_btn btn_light"onClick={() => setStep(2)}>Next</button>
            </div>
            
        </div>
    )
}

export default FirstStep
