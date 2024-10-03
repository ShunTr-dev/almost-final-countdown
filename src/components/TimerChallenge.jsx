import { useState, useRef } from 'react';

//let timer; // This variable will store the timer ID Is necessary to put it outside the component to avoid creating a new timer every time the component re-renders.
// But it's important to remember that this is a global variable, so it's shared among all instances of the TimerChallenge component.
// So this is not a good practice in a real-world application. We will use the useRef hook to store the timer ID instead.

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
        setTimerExpired(false);
    }

    return (
        <section className="challenge" id="timer">
            <h2>{title}</h2>
            {timerExpired ? <p className="expired">Time's up!</p> : null}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {!timerStarted ? 'Start' : 'Stop'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}
