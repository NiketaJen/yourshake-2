import React, {useContext} from 'react'
import FirstStep from "./quiz/FirstStep"
import SecondStep from "./quiz/SecondStep"
import ThirdStep from "./quiz/ThirdStep"
import {Step, Stepper, StepLabel} from "@material-ui/core"
import {multiStepContext} from "./StepContex"
import "./css/Quiz.css"

function Quiz() {
    const {currentStep, finalData} = useContext(multiStepContext)

    function showStep(step) {
        switch(step) {
            case 1:
                return <FirstStep className="stepContent"/>
            case 2:
                return <SecondStep className="stepContent"/>
            case 3:
                return <ThirdStep className="stepContent"/>
        }
    }
    return (
        <div className="quiz">
            <div className="center-stepper">
                <Stepper style={{width:'18%'}} activeStep={currentStep -1} orientation="horizontal" className="stepper">
                    <Step className="step">
                        <StepLabel className="stepLabel"></StepLabel>
                    </Step>
                    <Step className="step">
                        <StepLabel className="stepLabel"></StepLabel>
                    </Step>
                    <Step className="step">
                        <StepLabel className="stepLabel"></StepLabel>
                    </Step>
                </Stepper>
            </div>
            {showStep(currentStep)}
          
            
        </div>
    )
}

export default Quiz
