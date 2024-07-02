"use client";
import React, { FC } from "react";
import css from "../page.module.scss";

interface IContentBoxProps {
  children?: React.ReactNode;
  title?: string;
  textBottom?: string;
}

const ContentBox: FC<IContentBoxProps> = ({ children, title, textBottom }) => {
  return (
    <section className={css.section}>
      <div className={css.head}>
        <h2 className={css.title}>{title}</h2>
      </div>
      <div className={css.wrapper}>
        <div className={css.content}>{children}</div>
        <div className={css.bootom}>
          <p className={css.text}>{textBottom}</p>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
