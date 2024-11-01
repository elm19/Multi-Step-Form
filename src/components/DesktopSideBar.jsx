import SideBarText from "./SideBarText";


function DesktopSideBar() {
    const steps = [
        { number: 1, text: 'YOUR INFO' },
        { number: 2, text: 'SELECT PLAN' },
        { number: 3, text: 'ADD-ONS' },
        { number: 4, text: 'SUMMARY' },
    ];
    return (
        <div className="side-bar-desktop">
        {steps.map((step) => (
            <SideBarText key={step.number} number={step.number} text={step.text} />
        ))}

        </div>
    );
}

export default DesktopSideBar;