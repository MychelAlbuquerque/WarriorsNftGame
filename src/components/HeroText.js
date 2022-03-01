import style from '../style/HeroText.module.css';
function HeroText(){
  return(
    <div >
      <h1 id={style.hero} >
        SELECT YOUR HERO:
      </h1>
    </div>
  )
}

export default HeroText;