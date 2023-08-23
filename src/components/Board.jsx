import { useState } from "react";
import Square from "./square";

export default function Board() {

    const [x_is_next, set_x_is_next] = useState(true);
    const [squares, set_squares] = useState(Array(9).fill(null));

    const winner = calculate_winner(squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player: " + (x_is_next ? "X" : "O");
    }


    function calculate_winner (squares) {
        const winner_lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winner_lines.length; i++) {
            const [a, b, c] = winner_lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
        }
    }


    function handle_click (i) {

        if (calculate_winner(squares) || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        if (x_is_next) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        set_x_is_next(!x_is_next);
        set_squares(nextSquares);
      }


      return (
        <>
            <div className="status">{status}</div>
            <div className="board">
                <div className="board_row">
                    <Square value={squares[0]} on_square_click={() => handle_click(0)} />
                    <Square value={squares[1]} on_square_click={() => handle_click(1)} />
                    <Square value={squares[2]} on_square_click={() => handle_click(2)} />
                </div>
                <div className="board_row">
                    <Square value={squares[3]} on_square_click={() => handle_click(3)} />
                    <Square value={squares[4]} on_square_click={() => handle_click(4)} />
                    <Square value={squares[5]} on_square_click={() => handle_click(5)} />
                </div>
                <div className="board_row">
                    <Square value={squares[6]} on_square_click={() => handle_click(6)} />
                    <Square value={squares[7]} on_square_click={() => handle_click(7)} />
                    <Square value={squares[8]} on_square_click={() => handle_click(8)} />
                </div>
            </div>
        </>

  );
}
