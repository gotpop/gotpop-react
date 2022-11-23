import { GiSpiralLollipop } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

type Props = {
  vars: object;
}

const Logo = ({ vars }: Props) => {
  return (
    <Link className={styles.logo} to="/">
      <h1>
        <GiSpiralLollipop />
        <span>Starter</span>
      </h1>
    </Link>
  );
};

Logo.defaultProps = {
  vars: null,
};

export default Logo;
