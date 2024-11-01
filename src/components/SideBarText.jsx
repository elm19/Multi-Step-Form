function SideBarText({number, text}) {
    return (
        <div className="sidebar-text-container">
            <div className="numberText">{number}</div>
            <div className="step-text">
                {`STEP ${number}`} 
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
}

export default SideBarText;
