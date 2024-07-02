import React, { FC } from "react";
import css from "../page.module.scss";

type FileItem = {
  name: string;
  format?: string;
};

interface IFileCardProps {
  list?: FileItem[];
  title?: string;
}

const FileCard: FC<IFileCardProps> = ({ list, title }) => {
  return (
    <article className={css.card}>
      <h3 className={css.cardTitle}>{title ? title : "Name"}</h3>
      <ul className={css.cardList}>
        {list?.map(({name, format}, index) => (
          <li className={css.cardItem} key={index}>
                <span>{name}</span>
                {format && <span>{format}</span>}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FileCard;
