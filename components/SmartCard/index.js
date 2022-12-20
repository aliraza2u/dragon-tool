import React from "react";
import styles from "./SmartCard.module.scss";
import cashIcon from '../../public/cashIcon.png'
import Image from "next/image";

const SmartCard = ({ tilte, tooltip }) => {
    return (
        <div className={styles.smartCardWrapper}>
            <div className={styles.contentWrapper}>
                <Image src={cashIcon}  />
                <p>{'Paymeint'}</p>
            </div>
        </div>
    );
};

export default SmartCard;
