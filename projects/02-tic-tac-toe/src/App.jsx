import { useState } from "react"
import { checkWinner, checkEndGame} from "./logic/board.js"
import { TURNS } from './constants.js'
import { WinnerModal } from "./components/winnerModal.jsx"
import confetti from 'canvas-confetti'
import { Square } from './components/square.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

export const App = () => {

const [board, setBoard] = useState(() => {
  const boardFromStorage = window.localStorage.getItem('board')
  return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
})

const [turn, setTurn] = useState(() => {
  const turnFromStorage = window.localStorage.getItem('turn')
  return turnFromStorage ?? TURNS.X
})

const [winner, setWinner] = useState(null)

const updateBoard = (index) => {
  if(board[index] || winner) return

  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)

  saveGameToStorage({
    board: newBoard,
    turn: newTurn
  })

  const nwWinner = checkWinner(newBoard)
  if(nwWinner) {
    confetti()
    setWinner(nwWinner)
  } else if(checkEndGame(newBoard)) {
    setWinner(false)
  }
}

const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
  resetGameStorage()
}

  return (
    <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset Game</button>
        <section className="game">
          {
            board.map((squareValue, index) => {
               return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {squareValue}
              </Square>
               )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
          <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
        </section>
        
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

