// components
import Banner from "../Banner";
import Attributes from "./Attributes";
import Companies from "./Companies";
import Definition from "./Definition";
import Guide from "./Guide";
// style
import styles from "./Hero.module.css";
import Instruction from "./Instruction";
import Restrictions from "./Restrictions";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default Hero;
