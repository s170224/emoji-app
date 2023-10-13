import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameStatus: true,
    checkingList: [],
  }

  shuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetFunction = () => {
    const {checkingList, gameStatus, score, topScore} = this.state
    this.setState(prevState => ({checkingList: [], gameStatus: true, score: 0}))
  }

  onclickButton = id => {
    const {score, topScore, checkingList, gameStatus} = this.state
    const {emojisList} = this.props
    const checkedLength = checkingList.length
    const checkedValue = checkingList.includes(id)

    console.log(checkedLength)

    if (checkedValue === false) {
      emojisList.forEach(each => {
        if (id === each.id && checkedLength < 11) {
          this.setState(prevState => ({
            checkingList: [...prevState.checkingList, each.id],
            score: prevState.score + 1,
            gameStatus: true,
          }))
        } else if (checkedLength === 11) {
          this.setState({
            checkingList: [],
            score: 12,
            gameStatus: false,
            topScore: 12,
          })
        }
      })
    } else {
      if (topScore > checkingList.length) {
        this.setState(prevState => ({
          topScore: prevState.topScore,
          gameStatus: false,
          score: prevState.score,
        }))
        console.log('12')
      } else {
        this.setState(prevState => ({
          topScore: checkingList.length,
          checkingList: [],
          gameStatus: false,
          score: prevState.score,
        }))
      }
      console.log(topScore)
    }
  }

  render() {
    const {score, topScore, checkingList, gameStatus, playStatus} = this.state
    const {emojisList} = this.props
    const shuffledEmojiList1 = this.shuffledEmojiList()
    console.log(checkingList)
    return (
      <div>
        <div className="container">
          <div className="nav-con">
            <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
          </div>
          <div>
            {gameStatus ? (
              <ul className="emojiContainer">
                {shuffledEmojiList1.map(eachEmoji => (
                  <EmojiCard
                    emojiItem={eachEmoji}
                    key={eachEmoji.id}
                    onclickButton={this.onclickButton}
                    gameStatus={gameStatus}
                  />
                ))}
              </ul>
            ) : (
              <div>
                <WinOrLoseCard
                  score={score}
                  resetFunction={this.resetFunction}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
