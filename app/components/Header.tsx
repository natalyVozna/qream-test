"use client";

import { useRef, useState } from "react";
import css from "../styles/header.module.scss";
import DropMenu from "./DropMenu";
import { useClickOutside } from "../hooks/clickOutside";

const menuList = [
  { name: "NCD Tree", command: "Alt+F4" },
  { name: "Exit", command: "New File" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Используем хук useClickOutside для закрытия меню при клике вне него
  useClickOutside({
    ref: menuRef,
    callback: closeMenu,
    btnRef: btnRef,
  });

  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.headerNav}>
          <ul className={css.headerList}>
            <li>
              <button
                type="button"
                onClick={toggleMenu}
                className={`${css.menuItem} ${css.active}`}
                ref={btnRef}
              >
                File
              </button>
            </li>
            <li>
              <p className={css.menuItem}>Disk</p>
            </li>
            <li>
              <p className={css.menuItem}>Commands</p>
            </li>
          </ul>
          {showMenu && <DropMenu list={menuList} ref={menuRef} />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
