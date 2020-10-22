import React, {useState} from 'react'
import Quiz from "./Quiz"


export const multiStepContext = React.createContext();
   

    const StepContex = () => {
        const [currentStep, setStep] = useState(1);
        const [userData, setUserData] = useState([]);
        const [finalData, setFinalData] = useState([]);

    function submitData(){
        setFinalData(finalData =>[...finalData, userData]);
        setUserData('');
        setStep(1);
        
    }

    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
                <Quiz />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContex
