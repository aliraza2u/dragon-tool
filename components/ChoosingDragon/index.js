import Image from "next/image";
import React from "react";
import styles from "../ChoosingDragon/ChoosingDragon.module.scss";
import choosingDragonImage from "../../public/choosing.png";
import best from "../../public/best.png";

const ChoosingDragon = () => {
    return (
        <div className={styles.choosingDragonWraper}>
            <div className={styles.imageBackgroundWrapper}>
                <div className={styles.imageBackground}></div>
                <div className={styles.imageWrapper}>
                    <Image src={choosingDragonImage} alt="choose dragon" />
                </div>
            </div>
        </div>
    );
};

export default ChoosingDragon;
