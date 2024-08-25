"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { fadeIn } from "@/utils/fadeIn";
import clsx from "clsx";

type CustomButtonType = {
  label: string;
  onClick: () => void;
};

const CustomButton: FC<CustomButtonType> = ({ label, onClick }) => {
  const contentRef = useRef<HTMLElement>(null);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (contentRef.current) fadeIn(contentRef.current, true, setIsShow);
  }, [contentRef]);
  return (
    <>
      <div className={style.buttonBox}>
        <section
          className={clsx(style.fadeInContent, { [style.fadeIn]: isShow })}
          ref={contentRef}
        >
          <button className={style.Button} onClick={onClick}>
            <p className={style.Typography}>{label}</p>
          </button>
        </section>
      </div>
    </>
  );
};

export default CustomButton;
