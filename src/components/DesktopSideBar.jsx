import SideBarText from "./SideBarText";


function DesktopSideBar() {
    const steps = [
        { number: 1, text: 'First step description' },
        { number: 2, text: 'Second step description' },
        { number: 3, text: 'Third step description' },
        // Add more steps as needed
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