import { Dispatch, SetStateAction, createContext, useState } from "react";

type MenuObject = {
  open?: boolean;
};

type Menu = {
  menu: MenuObject | null;
  setMenu: Dispatch<SetStateAction<object>>;
};

type Props = {
  children: JSX.Element;
};

const MenuContext = createContext<Menu>({ menu: null, setMenu: () => {} });

export function MenuProvider({ children }: Props) {
  const [menu, setMenu] = useState<object>({ open: false });

  return <MenuContext.Provider value={{ menu, setMenu }}>{children}</MenuContext.Provider>;
}

export default MenuContext;
