import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props
  return (
    <div>
      {gameStatus ? (
        <div className="navBar">
          <div className="image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
              alt="emoji logo"
              className="imge1"
            />
            <h1 className="emojiPara">Emoji Game</h1>
          </div>
          <div className="score-con">
            <p className="para3">Score: {score} </p>
            <p className="para3">Top Score: {topScore} </p>
          </div>
        </div>
      ) : (
        <div className="navBar">
          <div className="image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
              alt="emoji logo"
              className="imge1"
            />
            <h1 className="emojiPara">Emoji Game</h1>
          </div>
        </div>
      )}
    </div>
  )
}
export default NavBar
