import styles from "./Box.module.css";

type props = {
  children: JSX.Element;
};

export default function Box({ children }: props) {
  return <div className={styles.box}>{children}</div>;
}
