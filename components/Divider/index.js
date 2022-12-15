import React from "react";
import styles from "../Divider/Divider.module.scss";

const Divider = ({ className }) => {
  return <div className={`${className} ${styles.divider}`} />;
};

export default Divider;
