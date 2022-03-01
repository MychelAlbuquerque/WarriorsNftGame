import style from '../style/WarriorOne.module.css'
import warrior1 from '../img/warrior1.png'




function WarriorOne() {
  return (
    <div>
      <img src={warrior1} id={style.imgWarrior} />
    </div>
  )
}

export default WarriorOne