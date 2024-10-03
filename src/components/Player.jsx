import { useState } from 'react';

export default function Player() {
    const [playerName, setPlayerName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handlePlayerChangeName(event) {
        setSubmitted(false);
        setPlayerName(event.target.value);
    }

    function handleClick() {
        setSubmitted(true);
    }

    return (
        <section id="player">
            <h2>Welcome {submitted ? playerName : 'New Player'}</h2>
            <p>
                <input type="text" onChange={handlePlayerChangeName} value={playerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
