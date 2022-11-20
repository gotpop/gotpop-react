import LinkInternal from "@ui/LinkInternal";
import keyboardPic from "../../../../public/images/keyboard.png";
import styles from "./Product.module.css";

// import keyboardPic from "@images/images/keyboard.png";



type Item = {
  name: string;
  id: number;
  url: string;
  price: number;
};

type Props = {
  product: Item;
};

const Product = ({ product }: Props) => {
  const { name, url, price } = product;

  return (
    <section className={styles.product}>
      <img className={styles.image} src={url} alt="Picture of the author" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{price}</p>
        <LinkInternal href={'/'}>Buy now</LinkInternal>
      </div>
    </section>
  );
};

Product.defaultProps = {
  product: {
    title: "GotPop Starter",
    description: "A Next.js starter template using Next.js 13",
    link: {
      text: "Find out more!",
      href: "#panel-1",
    },
  },
};

export default Product;
