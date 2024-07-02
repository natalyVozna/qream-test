import React, { FC } from "react";
import css from "../page.module.scss";

interface ITreeCardProps {
  list: string[];
}

const TreeCard: FC<ITreeCardProps> = ({ list }) => {
  return (
    <div className={css.treeWrap}>
      <ul className={css.tree}>
        {list.map((el, index) => (
          <li className={css.treeItem} key={index}>
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreeCard;
