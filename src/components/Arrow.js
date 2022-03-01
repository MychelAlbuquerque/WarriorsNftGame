import arrow from "../img/arrow.png"
import style from "../style/Arrow.module.css"
import { FaArrowCircleLeft } from "react-icons/fa";

function Arrow(){
  let degree = document.documentElement.style;
  return(
      <FaArrowCircleLeft className={style.arrow} />
      
  )
}

export default Arrow;