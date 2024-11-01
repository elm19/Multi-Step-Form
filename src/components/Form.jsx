import StepTemplate from "./stepTemplate";
import Step1 from "./Step1";


const formSteps = [
    new StepTemplate(
        1,
        "Personal info",
        "Please provide your name, email address and phone number.",
        () => <Step1 />
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

function Form (){
    return (
        <div className="form-container">
            {formSteps[0].render()}
        </div>
    );
}

export default Form;