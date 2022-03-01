import style from '../style/PlayButton.module.css'

function PlayButton(props){
  return(
    <div>
      <button className={style.playButton}>{props.tag}</button>
    </div>
  )
}

export default PlayButton