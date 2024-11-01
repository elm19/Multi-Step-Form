function SideBarText({number, text}) {
    return (
        <div>
            <div className="numberText">{number}</div>
            <div>{`STEP ${number}`}</div>
            <div>{text}</div>
        </div>
    );
}

export default SideBarText;
