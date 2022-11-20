import styles from "./Main.module.css";

type Props = {
  children: JSX.Element;
};

export default function Main({ children }: Props) {
  return <div className={styles.main}>{children}</div>;
}
