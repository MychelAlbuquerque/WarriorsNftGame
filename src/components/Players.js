import style from '../style/Players.module.css';
import { useEffect, useState, useRef } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";



function Players() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/players.json')
      .then((response) => response.json())
      .then(setData);
  }, [])

  const leftClick = (e) => {
    carousel.current.scrollLeft -= (carousel.current.offsetWidth) / 5;
  }

  const rightClick = (e) => {
    carousel.current.scrollLeft += (carousel.current.offsetWidth) / 5;
  }



  return (
    <div className={style.container}>
      <FaArrowCircleLeft onClick={leftClick} className={style.arrow} />
      <div className={style.carousel} ref={carousel}>
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className={style.item} key={id}>
              <div >
                <img src={image} className={style.image}></img>
              </div>
              <div className={style.name}>
                <p>{name}</p>
              </div>
            </div>
          )
        })}
      </div>
      <FaArrowCircleLeft onClick={rightClick} className={style.arrow} />
    </div>
  )
}

export default Players;