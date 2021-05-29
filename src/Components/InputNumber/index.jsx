import { useState } from 'react';

import './styles.css';

const InputButton = ({ active, currentState, data }) => {
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  
  function sendData() {
    data({
      inputHours,
      inputMinutes,
      inputSeconds,
    });

    active(!currentState);
  }

  function handleHours(event) {
    const value = event.target.value;

    value < 0
      ? setInputHours(0)
      : setInputHours(value);
  }

  function handleMinutes(event) {
    const value = event.target.value;

    if(value>=0 && value<60)
      setInputMinutes(value);
   
    return;
  }

  function handleSeconds(event) {
    const value = event.target.value;

    if(value>=0 && value<60)
      setInputSeconds(value);
   
    return;
  } 

  return (
    <div className="selectTime">
      <div className="inputs">
        <div className="input-group">
          <label htmlFor="">Horas</label>
          <input 
            className="input-time" 
            type="number" 
            name="hour"
            value={inputHours}
            onChange={event => handleHours(event)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Minutos</label>
          <input 
            className="input-time" 
            type="number" 
            name="minuts"
            value={inputMinutes}
            onChange={event => handleMinutes(event)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Segundos</label>
          <input 
            className="input-time" 
            type="number" 
            name="seconds"
            value={inputSeconds}
            onChange={event => handleSeconds(event)}
          />
        </div>
      </div>

      <button className="btn-start" onClick={() => sendData()}>Start</button>
    </div>
  );
}

export default InputButton;