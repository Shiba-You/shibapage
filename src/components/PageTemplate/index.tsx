import React, { FC, ReactNode } from "react";
import Header from "@/features/common/Header";
import CustomCard from "@/features/common/CustomCard";
import style from "./style.module.scss";
import PageTitle from "@/features/common/PageTitle";
import CustomBtutton from "@/features/common/CustomButton";
import RouteButton from "@/features/common/RouteButton";

type PageTemplateType = {
  pageTitle: string;
  children: ReactNode;
};

const PageTemplate: FC<PageTemplateType> = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <div className={style.mainContainer}>
        <PageTitle title={pageTitle} />
        <CustomCard>{children}</CustomCard>
        <RouteButton label="> Go Home " route="/" buttonType="Custom" />
        <div className={style.spacer} />
      </div>
    </>
  );
};

export default PageTemplate;
