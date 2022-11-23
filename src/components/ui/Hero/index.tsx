import LinkInternal from "@ui/LinkInternal";
import keyboardPic from "@images/hero/keyboard.png";
import styles from "./Hero.module.css";

type Hero = {
  image: string;
  page: {
    title: string;
    excerpt: string;
    link: {
      href: string;
      text: string;
    };
  };
};

const Hero = ({ image, page }: Hero) => {
  const { link, excerpt, title } = page;

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <LinkInternal href={link.href}>Find out more</LinkInternal>
      </div>
      <img className={styles.image} src={image} alt="Picture of the author" />
    </section>
  );
};

Hero.defaultProps = {
  image: keyboardPic,
  page: {
    title: "GotPop Starter",
    excerpt: "A Next.js starter template using Next.js 13",
    link: {
      text: "Find out more!",
      href: "#panel-1",
    },
  },
};

export default Hero;
