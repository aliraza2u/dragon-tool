import Image from "next/image";
import React from "react";
import styles from "../ChoosingDragon/ChoosingDragon.module.scss";
import choosing from "../../public/choosing.png";
import CustomButton from "../CustomButton";
import pay from "../../public/pay.png";
import best from "../../public/best.png";
const ChoosingDragon = () => {
  return (
    <div className={styles.choosingWraper}>
      <div className={styles.waseem}></div>
      <div className={styles.choosingPanda}>
        <div className={styles.buttonWrap}>
          <Image src={pay} className={styles.payWrap} />
          <CustomButton
            children={"Easy To Pay"}
            className={styles.signupDragon}
          />
        </div>
        <div className={styles.backgroundWrap}>
          <div className={styles.imageWrapper}>
            <Image src={choosing} className={styles.wrapper} />
          </div>
        </div>
        <div className={styles.bestbtn}>
          <Image src={best} className={styles.bestWrap} />
          <CustomButton
            children={"The Best Support"}
            className={styles.signupDragon}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoosingDragon;
