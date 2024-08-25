"use client";
import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import clsx from "clsx";
import RouteButton from "@/features/common/RouteButton";

const Header: FC = () => {
  const router = useRouter();
  const nowPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = (next: string) => router.push(next);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  if (nowPath == "/") return <></>;

  return (
    <div className={style.AppBar}>
      <Toolbar className={style.Toolbar}>
        <RouteButton
          label={"Yosuke Shibata"}
          route="/"
          buttonType="Thin"
          className={clsx(style.Typography, style.title)}
        />
        <div className={style.menuGroup}>
          <RouteButton
            label="Profile"
            route={"/profile"}
            buttonType="Thin"
            className={style.ThinButton}
            typeClassName={style.typeClassName}
          />
          <RouteButton
            label="Publication"
            route={"/service"}
            buttonType="Thin"
            className={style.ThinButton}
            typeClassName={style.typeClassName}
          />
          <RouteButton
            label="Contact"
            route={"/contact"}
            buttonType="Thin"
            className={style.ThinButton}
            typeClassName={style.typeClassName}
          />
        </div>
        <div className={style.menuButton}>
          <div
            className={clsx(style.openButon, { [style.active]: isOpen })}
            onClick={openMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={clsx(style.menuContent, {
            [style.openMenuContent]: isOpen,
          })}
        >
          <ul>
            <li>
              <a
                onClick={() => {
                  routes("/profile");
                  setIsOpen(false);
                }}
                className={clsx(style.typeClassName, style.Typography)}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  routes("/service");
                  setIsOpen(false);
                }}
                className={clsx(style.typeClassName, style.Typography)}
              >
                Service
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  routes("/contact");
                  setIsOpen(false);
                }}
                className={clsx(style.typeClassName, style.Typography)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Toolbar>
    </div>
  );
};

export default Header;
