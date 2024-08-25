"use client";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import style from "./style.module.scss";
import { fadeIn } from "@/utils/fadeIn";
import clsx from "clsx";

type CustomCardType = {
  children: ReactNode;
};

const CustomCard: FC<CustomCardType> = ({ children }) => {
  const contentRef = useRef<HTMLElement>(null);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (contentRef.current) fadeIn(contentRef.current, false, setIsShow);
  }, [contentRef]);
  return (
    <section
      className={clsx(style.fadeInContent, { [style.fadeIn]: isShow })}
      ref={contentRef}
    >
      <Card className={style.Card}>{children}</Card>
    </section>
  );
};

export default CustomCard;
