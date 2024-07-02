"use сlient";

import React, { forwardRef, useRef } from "react";
import css from "../styles/header.module.scss";

type menuItem = {
  name: string;
  command: string;
};

interface DropMenuProps {
  list: menuItem[];
}

const DropMenu = forwardRef<HTMLDivElement, DropMenuProps>(({ list }, ref) => {
  return (
    <div className={css.dropMenu} ref={ref}>
      <ul className={css.dropList}>
        {list.map(({ name, command }, index) => (
          <li key={index} className={css.dropItem}>
            <span className={css.dropText}>{name}</span>
            <span className={css.dropText}>{command}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropMenu;
