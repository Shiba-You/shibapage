"use client";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import RINGS from "vanta/dist/vanta.rings.min";

import * as THREE from "three";

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <main className={styles.vanta} ref={vantaRef}></main>;
};

export default Vanta;
