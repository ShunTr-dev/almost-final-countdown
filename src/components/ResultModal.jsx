import { forwardRef, useImperativeHandle, useRef } from 'react';

// The forwardRef function is a higher-order component that allows you to pass a ref to a child component.
const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();

    // The useImperativeHandle hook allows you to customize the instance value that is exposed to the parent component when using a ref.
    useImperativeHandle(ref, () => ({
        showModal() {
            dialog.current.showModal();
        },
    }));

    return (
        <dialog ref={dialog} className="result-modal">
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
});

export default ResultModal;
