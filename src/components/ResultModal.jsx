export default function ResultModal({ result, targetTime }) {
    return (
        <dialog className="result-modal" open>
            <h2>You {result}</h2>
            <p>
                The target time was
                <strong>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </strong>
            </p>
            <p>
                You stopped the timer with <strong>X</strong> seconds left.
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
