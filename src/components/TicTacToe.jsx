import '../css/TicTacToe.css';

function TicTacToe() {

    function Square() {
        return <button>{value}</button>
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