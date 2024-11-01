class StepTemplate {
    constructor(number, title, text, component) {
        this.number = number;
        this.text = text;
        this.title = title;
        this.component = component; 
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.title}</h1>
                    <p>{this.text}</p>
                </div>
                {this.component ? this.component() : null} {/* Renders component if it's provided */}
            </div>
        );
    }
}

export default StepTemplate;
