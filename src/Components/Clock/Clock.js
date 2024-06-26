import React, { useState, useEffect } from 'react';
import './Clock.css'

const Clock = () => {
  
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [min, setMin] = useState(0);
  const [showValue, setShowValue] = useState([]);

  // Clock functionality
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // Start stopwatch
  const startFunction = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
      setIntervalId(id);

      const minInterval = setInterval(() => {
        setMin(prevMin => prevMin + 1);
      }, 60000);
      setIntervalId(minInterval);
    }
  };

  // Stop stopwatch
  const stopFunction = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Reset stopwatch
  const resetFunction = () => {
    setCounter(0);
    setMin(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Get current time
  const getTimeFunction = () => {
    setShowValue([...showValue, `The stop time is ${counter - 1}`]);
  };

  // Clear times
  const clearFunction = () => {
    setShowValue([]);
  };

  return (
    <div className='body'>
      <section className='clock-section'>
      <p className='project-name'>Stopwatch</p>
      <div id="clockCss">
        <p className="timeShow">{time}</p>
      </div>
        <p id="CounterDiv">{counter}</p>
        <p className="addForMinutes">{`${min}: Minutes, ${counter % 60}: Seconds`}</p>
        <div className="btnDiv">
          <button className="start-btn" onClick={startFunction}>Start</button>
          <button className="stop-btn" onClick={stopFunction}>Stop</button>
          <button className="reset-btn" onClick={resetFunction}>Reset</button>
          <button className="getTime-btn" onClick={getTimeFunction}>Get Time</button>
          <button className="clear-btn" onClick={clearFunction}>Clear Time</button>
        </div>
        <div className="showAreaValue">
          {showValue.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Clock;
