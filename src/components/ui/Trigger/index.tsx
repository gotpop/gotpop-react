import MenuContext from "@context/MenuContext";
import TriggerIcon from "@ui/TriggerIcon";
import { set } from "@utilities/setPropsOnRoot";
import styles from "./Trigger.module.css";
import { useContext } from "react";

type Props = {
  vars: object;
};

const Trigger = ({ vars }: Props) => {
  const { menu, setMenu } = useContext(MenuContext);

  const handleClick = (e) => {
  console.log('e :', e);
    setMenu((prevState: { open: boolean }) => {
      const newState = !prevState.open;

      newState ? set("--menu-state", "var(--menu-open)") : set("--menu-state", "var(--menu-closed)");

      return { open: newState };
    });
  };

  return (
    <button onClick={handleClick} className={styles.trigger} style={vars}>
      <TriggerIcon menuState={menu} />
      {menu?.open ? <span>Close menu</span> : <span>Open menu</span>}
    </button>
  );
};

Trigger.defaultProps = {
  vars: null,
};

export default Trigger;
