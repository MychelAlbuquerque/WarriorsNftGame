import style from '../style/BuyButton.module.css'

function BuyButton(props){
  return(
    <div>
      <button className={style.buyButton}>{props.tag}</button>
    </div>
  )
}

export default BuyButton