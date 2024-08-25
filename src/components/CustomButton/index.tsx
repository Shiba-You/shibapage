import React, { FC } from "react";
import style from "./style.module.scss";
import clsx from "clsx";

type CustomButtonType = {
  label: string;
  onClick: () => void;
  className?: string;
  typeClassName?: string;
};

const CustomButton: FC<CustomButtonType> = ({
  label,
  onClick,
  className,
  typeClassName,
}) => {
  return (
    <>
      <button className={clsx(style.Button, className)} onClick={onClick}>
        <p className={clsx(style.Typography, typeClassName)}>{label}</p>
      </button>
    </>
  );
};

export default CustomButton;
