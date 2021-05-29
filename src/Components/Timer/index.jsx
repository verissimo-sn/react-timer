import { useState, useEffect } from 'react';

import Button from '../Button';

import './styles.css';

const Timer = ({ data, active, currentState }) => {
  const [hours, setHours] = useState(data.inputHours);
  const [minutes, setMinutes] = useState(data.inputMinutes);
  const [seconds, setSeconds] = useState(data.inputSeconds);
  const [pause, setPause] = useState(false);

  function decrement() {
    if(!pause && (seconds>0 && seconds<60)) {
      setSeconds(seconds - 1);
    }
  }

  // Inicia o timer se nao estiver zerado
  function handlePlayPouse() {
    if(hours===0 && minutes===0 && seconds===0) {
      setPause(true);
      return;
    }
    setPause(!pause);
  }

  // Zera timer
  function handleReset() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  function decremtHour() {
    setHours(hours - 1);
  }

  function decremtMinute() {
    setMinutes(minutes - 1);
  }

  // inicia o decrementacao do timer
  useEffect(()=>{
    const init = setInterval(() => {
      decrement()
    }, 1000);

    return () => clearInterval(init);
  });

  useEffect(()=>{
    if(seconds===0 && minutes>0) {
      setSeconds(59);
      decremtMinute();
    }

    // para o timer se estiver zerado
    if(hours===0 && minutes===0 && seconds===0) {
      setPause(true);
      return;
    }
      
  }, [seconds]);

  useEffect(()=>{
    if(minutes === 0 && hours>0) {
      setMinutes(59);
      decremtHour();

      if(seconds===0) {
        setSeconds(59);
      }
    }
  }, [minutes]);


  // Adiciona um zero a esquerda
  function addZero(number) {
    let numberToString = String(number);

    if(numberToString.length === 1)
      return numberToString = `0${numberToString}`;

    return numberToString;
  }

  return (
    <div className="Timer">
      <div className="times">
        <div className="time">{addZero(hours)}</div>
        <div className="time">{addZero(minutes)}</div>
        <div className="time">{addZero(seconds)}</div>
      </div>

      <div className="buttons">
        <Button action={() => handlePlayPouse()} name={pause ? 'Play' : 'Pause'}/>
        <Button action={() => handleReset()} name="Zerar"/>
      </div>

      <button className="new-timer" onClick={() => active(!currentState)}>Novo timer</button>
    </div>
  );
}

export default Timer;