import '../css/TicTacToe.css';
import { useState } from 'react';

function Square({ value }) {
    return <button className="square">{value}</button>
}

function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(""));

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>

        </div>
    )
}

export default TicTacToe;