import { forwardRef, useImperativeHandle, useRef } from 'react';

// The forwardRef function is a higher-order component that allows you to pass a ref to a child component.
const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // The useImperativeHandle hook allows you to customize the instance value that is exposed to the parent component when using a ref.
    useImperativeHandle(ref, () => ({
        showModal() {
            dialog.current.showModal();
        },
    }));

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The target time was{' '}
                <strong>
                    {' '}
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
