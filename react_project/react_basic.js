function App() {
    const [min, setMin] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);

    function handleMinChange(e) {
        const newMin = e.target.value;
        setMin(newMin);
        setHour(Math.round(newMin / 60));
    }

    function handleHourChange(e) {
        const newHour = e.target.value;
        setHour(newHour);
        setMin(newHour * 60);
    }

    function handleReset() {
        setHour(0);
        setMin(0);
    }

    function onFlip() {
        setFlipped((current) => !current);
    }

    return (
        <div>
            <div>
                <label htmlFor="min">min</label>
                <input
                    value={min}
                    onChange={handleMinChange}
                    id="min"
                    type="number"
                    placeholder="min"
                    disabled={flipped}
                />
            </div>
            <div>
                <label htmlFor="hour">hour</label>
                <input
                    value={hour}
                    onChange={handleHourChange}
                    id="hour"
                    type="number"
                    placeholder="hour"
                    disabled={!flipped}
                />
            </div>
            <input type="button" onClick={handleReset} value="reset"></input>
            <input type="button" onClick={onFlip} value="flip"></input>
        </div>
    );
}

ReactDOM.render(<App />, document.body);

/*
const span = React.createElement(
    'span',
    {
        onMouseEnter: () => {
            console.log('mouse enter');
        },
    },
    "Hello, I'm span!!"
);
const btn = React.createElement(
    'button',
    {
        onClick: () => {
            console.log('clicked!');
        },
    },
    'click me!'
);
const container = React.createElement('div', null, [span, btn]);

ReactDOM.render(container, document.body);
*/
