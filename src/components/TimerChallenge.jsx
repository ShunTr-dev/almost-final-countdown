import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

//let timer; // This variable will store the timer ID Is necessary to put it outside the component to avoid creating a new timer every time the component re-renders.
// But it's important to remember that this is a global variable, so it's shared among all instances of the TimerChallenge component.
// So this is not a good practice in a real-world application. We will use the useRef hook to store the timer ID instead.

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        //setTimerStarted(false);
        //setTimerExpired(false);
    }

    return (
        <>
            <ResultModal ref={dialog} result={timerExpired ? 'lost' : 'succeeded'} targetTime={targetTime} />
            <section className="challenge" id="timer">
                <h2>{title}</h2>
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
        </>
    );
}
