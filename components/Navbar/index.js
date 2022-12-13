import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import index from "../CustomButton/index";
import CustomButton from "../CustomButton/index";
import dragonWhiteLogo from "../../public/dragonWhiteLogo.png";
import login from "../../public/login.png";
const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.imageWrap}>
          <Image src={dragonWhiteLogo} className={styles.wrap} />
        </div>
        <div className={styles.text}>
          <div className={styles.buyText}>
            <span className={styles.bySub}>Buy Subscriptions</span>
          </div>
          <div className={styles.buttonWrap}>
            <div className={styles.login}>
              <Image src={login} className={styles.vector} />
            </div>
            <CustomButton children={"Member Area"} className={styles.area} />
          </div>
          <div className={styles.sign}>
            <CustomButton children={"Signup Today"} className={styles.signup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
