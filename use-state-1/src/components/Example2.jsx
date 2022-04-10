import React, {useState} from "react";

const Example2 = () => {
    const getTime = () => new Date().toLocaleTimeString();
    const [time, setTime] = useState(getTime());
    const showTime = () => { setTime(getTime()); };
    const start = () => setInterval(showTime, 1000);
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={start}>START</button>
        </div>
    );
};

export default Example2;