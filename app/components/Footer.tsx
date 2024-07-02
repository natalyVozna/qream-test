import React from "react";
import css from "../styles/footer.module.scss";
import CommandBlock from "./CommandBlock";

const commands = [
  "Help",
  "Menu",
  "View",
  "Edit",
  "Copy",
  "RenMov",
  "Mkdir",
  "Delete",
  "PullDn",
  "Quit",
];

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.prefooter}>
          <input type="text" className={css.input} />
        </div>
        <div className={css.mainfooter}>
          <CommandBlock list={commands} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
