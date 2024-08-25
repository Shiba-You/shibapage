"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { fadeIn } from "@/utils/fadeIn";
import clsx from "clsx";

type PageTitleType = {
  title: string;
};

const PageTitle: FC<PageTitleType> = ({ title }) => {
  const contentRef = useRef<HTMLElement>(null);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (contentRef.current) fadeIn(contentRef.current, false, setIsShow);
  }, [contentRef]);
  return (
    <>
      <div className={style.spacer} />
      <section
        className={clsx(style.fadeInContent, { [style.fadeIn]: isShow })}
        ref={contentRef}
      >
        <p className={style.Typography}>{title}</p>
        <hr className={style.hr} />
      </section>
    </>
  );
};

export default PageTitle;
