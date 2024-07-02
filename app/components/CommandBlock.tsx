import React, { FC } from "react";
import css from "../styles/footer.module.scss";

interface CommandBlockProps {
  list: string[];
}

const CommandBlock: FC<CommandBlockProps> = ({ list }) => {
  return (
    <ul className={css.commandList}>
      {list.map((command, index) => (
        <li key={command} className={css.commandItem}>
          <button className={css.commandButton}>
            <span className={css.index}>{index + 1}</span>
            <span className={css.name}>{command}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CommandBlock;
