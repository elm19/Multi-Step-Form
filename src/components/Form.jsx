import StepTemplate from "./stepTemplate";
import Step1 from "./Step1";
import Step2 from "./Step2";
import React, { useState } from 'react';


const formSteps = [
    new StepTemplate(
        1,
        "Personal info",
        "Please provide your name, email address and phone number.",
        () => {}
    ),
    new StepTemplate(
        2,
        "Select you plan",
        "You have the option of monthly or yearly billing.",
        () => {}
    ),
    new StepTemplate(
        3,
        "Pick add-ons",
        "Add-ons help enhance your gaming experience.",
        () => {}
    ),
    new StepTemplate(
        4,
        "Finishing up",
        "Double check everything looks OK before confirming",
        () => {}
    )
]
const Steps = [Step1, <></>, <></>, <></>, <></>]
function Form (){
    const [step, setStep] = useState(0);
    const nextstep = () => {
        return setStep(step+1);
    }
    if(!step){
        formSteps[step].component = <Step1 onSubmit={nextstep}/>;
    } else if (step === 1){
        formSteps[step].component = <Step2 onSubmit={nextstep}/>;
    }
    
    return (
        <div className="form-container">
            {formSteps[step].render(nextstep)}
        </div>
    );
}

export default Form;