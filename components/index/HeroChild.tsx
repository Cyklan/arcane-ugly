import styles from "./styles/HeroChild.module.scss";

const HeroChild: React.FC<{}> = ({ children }) => {
  return <div className={styles["hero-child"]}>{children}</div>;
};

export default HeroChild;
