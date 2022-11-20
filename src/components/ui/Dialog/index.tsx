import { MouseEventHandler, useEffect, useRef } from "react";

import ButtonIcon from "@ui/ButtonIcon";
import { ImCross } from "react-icons/im";
import styles from "./Dialog.module.css";

type Dialog = {
  children: JSX.Element;
  handleClose: MouseEventHandler<HTMLButtonElement>;
};

const Dialog = ({ children, handleClose }: Dialog) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialog = dialogRef.current;

  useEffect(() => {    
    dialog?.showModal();

    return () => dialog?.close();
  }, []);

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.inner}>
        {children}
        <form method="dialog" className={styles.buttons}>
          <ButtonIcon content={"Close"} doClick={handleClose} icon={ImCross} vars={{ ["--icon-colour"]: "var(--error)" }} />
        </form>
      </div>
    </dialog>
  );
};

Dialog.defaultProps = {
  handleClose: null,
};

export default Dialog;
