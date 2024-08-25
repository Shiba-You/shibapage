"use client";
import styles from "./style.module.scss";
import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";

const ProfileContent = () => {
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={3}>
          <Image
            src={"https://avatars.githubusercontent.com/u/50415577?v=4"}
            alt="Profile"
            className={styles.image}
            layout="responsive"
            width={1}
            height={1}
          />
          <h3 className={styles.profile_title}>自己紹介</h3>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <p className={styles.Typography}>氏名：</p>
            </Grid>
            <Grid item xs={12} sm={8}>
              <p className={styles.Typography}>柴田 洋佑</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <p className={styles.Typography}>会社：</p>
            </Grid>
            <Grid item xs={12} sm={8}>
              <p className={styles.Typography}>野村総合研究所</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <p className={styles.Typography}>部署：</p>
            </Grid>
            <Grid item xs={12} sm={8}>
              <p className={styles.Typography}>
                生産革新センター /<br /> 生産革新ソリューション推進部
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h1 className={styles.h1}>About me</h1>
          <h2 className={styles.h2}>出身</h2>
          <p>
            福岡県北九州市 <br />→ 福岡県福岡市
          </p>
          <h2 className={styles.h2}>趣味</h2>
          <ul>
            <li>ゲーム</li>
            <ul>
              <li>Valorant</li>
              <li>スマブラ</li>
              <li>ストリートファイター6</li>
            </ul>
            <li>麻雀</li>
            <li>ポーカー</li>
            <li>ラーメン</li>
          </ul>
          <h2 className={styles.h2}>好きな技術</h2>
          <ul>
            <li>JavaScript</li>
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next</li>
            </ul>
            <li>AWS</li>
          </ul>
          <h1 className={styles.h1}>本研修について</h1>
          <p>
            普段開発の業務がないので、ついていけるかビクビクしています！
            <br />
            一つでも多くのスキルが身に付くように頑張ります！
          </p>
          <h2 className={styles.h2}>本コースで得たいもの</h2>
          <p>アジャイルの知識と開発全般の知識</p>
          <h2 className={styles.h2}>業務への活用</h2>
          <p>
            ウォーターフォールチックに業務を回しているので、アジャイル開発の良い部分を取り入れられるようにしたい。
          </p>
          <h2 className={styles.h2}>将来像</h2>
          <p>
            開発力を持ち、アジャイル開発でプロジェクトを推進していけるようなエンジニア
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileContent;
