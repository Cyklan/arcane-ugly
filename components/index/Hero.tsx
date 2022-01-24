import HeroChild from "./HeroChild";
import styles from "./styles/Hero.module.scss";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title, children }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <HeroChild>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroText}>
            AU ONLINE is a platform to play{" "}
            <a href="https://arcaneugly.com">Arcane Ugly</a> online with your
            friends.
            <br />
            It&apos;s powered by the cloud, all data is stored in your browser.
          </p>
        </HeroChild>
        <HeroChild>
          <h1 className={styles.heroTitle}>Beta Access</h1>
          <p className={styles.heroText}>
            It&apos;s obviously not done yet, but it&apos;s coming soon.
            <br />
            If you want to participate in the beta, you can send me an{" "}
            <a href="mailto:play-au@codearca.de">email</a> or send a message to
            @Cyklan#0001 on the official{" "}
            <a href="https://discord.gg/4pNQA8fSRv">Arcane Ugly Discord</a>.
            <br />
            Thank you for checking this out and have a nice day!
          </p>
        </HeroChild>
      </div>
    </div>
  );
};

export default Hero;
