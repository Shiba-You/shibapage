import React, { FC } from "react";
import style from "./style.module.scss";
import RouteButton from "@/features/common/RouteButton";
import clsx from "clsx";

const TopMenu: FC = () => {
  return (
    <div className={style.sideMenuBox}>
      <div className={style.flexBox}>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton1)}>
          <p className={style.Typography}>
            Yosuke
            <br /> Shibata
          </p>
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton2)}>
          <RouteButton
            label="Profile"
            route="/profile"
            buttonType="Thin"
            className={style.ThinButton}
          />
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton3)}>
          <RouteButton
            label="Service"
            route="/service"
            buttonType="Thin"
            className={style.ThinButton}
          />
        </div>
        <div className={clsx(style.ThinButtonDiv, style.ThinButton4)}>
          <RouteButton
            label="Contact"
            route="contact"
            buttonType="Thin"
            className={style.ThinButton}
          />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
