import React from "react";

const TimerControls = ({ timerOn, onStart, onStop }) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onStart}>Voltar</button>}
      <button onClick={onStop}>Zerar</button>
    </div>
  );
};

export default TimerControls;
