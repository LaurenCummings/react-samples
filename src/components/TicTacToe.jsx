import '../css/TicTacToe.css';

function TicTacToe() {

    function Square({ value }) {
        return <button className="square">{value}</button>
    }

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