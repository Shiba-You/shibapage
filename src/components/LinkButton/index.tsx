import React, { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@mui/material";

type LinkButtonType = {
  toLink: string;
  imagePath: string;
};

const LinkButton: FC<LinkButtonType> = ({ toLink, imagePath }) => {
  return (
    <Button className={clsx(style.Button)}>
      <Link href={toLink}>
        <Image
          src={imagePath}
          alt=""
          className={style.Image}
          width={5}
          height={30}
          unoptimized={true}
        />
      </Link>
    </Button>
  );
};

export default LinkButton;
