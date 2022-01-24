import styles from "./styles/HeroChild.module.scss";

const HeroChild: React.FC<{}> = ({ children }) => {
  return <div className={styles.heroChild}>{children}</div>;
};

export default HeroChild;
