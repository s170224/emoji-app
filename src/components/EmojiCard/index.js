import './index.css'

const EmojiCard = props => {
  const {emojiItem, onclickButton, gameStatus} = props
  const {id, emojiUrl, emojiName} = emojiItem

  const onClickButton1 = () => {
    onclickButton(id)
  }
  const changingEmojiCardPage = gameStatus

  return (
    <li className="emojiItemContainer">
      <button className="emojiButtom" onClick={onClickButton1}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icom" />
      </button>
    </li>
  )
}

export default EmojiCard
