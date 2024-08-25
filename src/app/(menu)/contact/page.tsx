import styles from "./style.module.scss";
import PageTemplate from "@/components/PageTemplate";
import React from "react";

const Contact = () => {
  return (
    <PageTemplate pageTitle={"Contact"}>
      <h1 className={styles.h1}>外部リンク</h1>
      <ul>
        <li>
          Qiita：
          <a className={styles.a} href="https://qiita.com/yabish">
            https://qiita.com/yabish
          </a>
        </li>
        <li>
          GitHub：
          <a className={styles.a} href="https://github.com/Shiba-You">
            https://github.com/Shiba-You
          </a>
        </li>
        <li>
          X（Twitter）：<a className={styles.a} href=""></a>
        </li>
      </ul>
    </PageTemplate>
  );
};

export default Contact;
