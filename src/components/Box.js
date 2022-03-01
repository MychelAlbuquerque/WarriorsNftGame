import styles from '../style/Box.module.css'
import WarriorsText from "../components/WarriorsText";
import Description from "../components/Description";
import WarriorOne from './WarriorOne';
import BuyButton from './BuyButton';
import PlayButton from './PlayButton';
import Button from './Button';



function Box() {
  return (
    <div className={styles.box}>
      <WarriorOne />
      <WarriorsText />
      <Description />
      <BuyButton tag="Buy Coins" />
      <PlayButton tag="Play Button" />
      <Button tag="Connect Wallet"/>

    </div>
  )
}

export default Box