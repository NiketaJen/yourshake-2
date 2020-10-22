import React, {useContext} from 'react'
import "../css/FirstStep.css"
import Icon from '@material-ui/core/Icon';
import {multiStepContext} from "../StepContex"

function FirstStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <div className="firstStep">
            
              <h2>What gender do you most identify with?</h2> 
            
            <div >
                <div>
                <label className="container">Male <Icon className="fas fa-mars" />
                    <input type="radio" checked={userData === 'male'} name="gender" value='male' onClick={(e) => setUserData('male')} />
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Female <Icon className="fas fa-venus" />
                    <input type="radio" checked={userData === 'female'} name="gender" value='female' onClick={(e) => setUserData('female')} />
                    <span className="checkmark"></span>
                    </label>
                    {/* Male
                   
                    <Icon className="fas fa-mars" /> */}
                </div>
                {/* <div>
                    Female
            
                    <Icon className="fas fa-venus" />
                </div> */}
            </div>
            <div className="firstStep__title" >
               
               <h2>Are you currently pregnant or breastfeeding?</h2>
                    <label className="container">Yes
                    <input type="radio" checked={userData === 'yes'} name="pregnant" value='yes' onClick={(e) => setUserData(e.target.value)} />
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">No
                    <input type="radio" name="pregnant" value='no' checked={userData === 'no'}  onClick={(e) => setUserData(e.target.value)}/>
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
