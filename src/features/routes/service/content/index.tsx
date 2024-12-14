import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
// import lunchBuddy from "";

const ServiceContent = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5">Lunch Buddy</Typography>
          <Typography variant="body1">
            「社内利用向け お昼ご飯の買い物依頼サービス」
          </Typography>
          <LinkButton
            toLink={"https://github.com/cc-pikachu-2024/LunchBuddy"}
            imagePath={"icons/github.svg"}
          />
          <LinkButton
            toLink={
              "https://www.canva.com/design/DAGXqdXM6Qc/BiJpsABZWAgCrp8yxsMUhw/view?utm_content=DAGXqdXM6Qc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcc4e4cae95"
            }
            imagePath={"icons/canva.png"}
          />
        </Grid>
        <Grid item xs={3}>
          <Image
            src={"images/LunchBuddy_icon.webp"}
            alt="Profile"
            layout="responsive"
            width={1}
            height={1}
            unoptimized={true}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </>
  );
};

export default ServiceContent;
