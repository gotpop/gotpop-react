import { useEffect, useRef } from "react";

import styles from "./TriggerIcon.module.css";
import stylesSpan from "./Span.module.css";

type MenuObject = {
  open?: boolean;
};

type Props = {
  menuState: MenuObject | null;
};

export default function TriggerIcon({ menuState }: Props) {
  const trigger = useRef<HTMLSpanElement | null>(null);
  const triggerRef = trigger.current;

  useEffect(() => {
    menuState?.open ? triggerRef?.setAttribute("open", "true") : triggerRef?.setAttribute("open", "false");
  }, [menuState?.open]);

  return (
    <span className={styles.icon} ref={trigger}>
      <span className={stylesSpan.top} data-test="top"></span>
      <span className={stylesSpan.middle}></span>
      <span className={stylesSpan.bottom}></span>
    </span>
  );
}
