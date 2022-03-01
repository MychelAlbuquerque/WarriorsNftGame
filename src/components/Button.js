import style from '../style/Button.module.css'

function Button(props){
  return(
    <div>
      <button className={style.defaultButton}>{props.tag}</button>
    </div>
  )
}

export default Button