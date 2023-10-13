import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, score, resetFunction} = props

  const playAgainButton = () => {
    resetFunction()
    console.log('playbuttonclicked')
  }

  return (
    <div>
      {score !== 12 ? (
        <div className="container1">
          <div className="min-Container">
            <h1>You Lose</h1>
            <p className="scorepara">Score</p>
            <p className="mainScore">{score}/12</p>
            <button className="playAgainButton" onClick={playAgainButton}>
              Play Again
            </button>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="image1"
            />
          </div>
        </div>
      ) : (
        <div className="container1">
          <div className="min-Container">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p> {score}/12</p>
            <button className="playAgainButton" onClick={playAgainButton}>
              Play Again
            </button>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
              className="image1"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
