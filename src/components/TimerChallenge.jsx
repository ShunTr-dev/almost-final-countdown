export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge" id="timer">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>Start Challenge</button>
            </p>
            <p className="active">Time ur running / Timer inactive</p>
        </section>
    );
}
