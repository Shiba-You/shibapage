"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import ThinButton from "@/components/CustomButton";
import clsx from "clsx";

const TopMenu: FC = () => {
  const router = useRouter();

  return (
    <div className={style.sideMenuBox}>
      <div className={style.flexBox}>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton1)}>
          <p className={style.Typography} onClick={() => router.push("/")}>
            Yosuke
            <br /> Shibata
          </p>
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton2)}>
          <ThinButton
            label="Profile"
            onClick={() => router.push("/profile")}
            className={style.ThinButton}
          />
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton3)}>
          <ThinButton
            label="Service"
            onClick={() => router.push("/service")}
            className={style.ThinButton}
          />
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton4)}>
          <ThinButton
            label="Contact"
            onClick={() => router.push("contact")}
            className={style.ThinButton}
          />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
