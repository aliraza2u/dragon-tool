import React from "react";
import styles from "../DragonAffordable/DragonAffordable.module.scss";
import Image from "next/image";
import doller from "../../public/doller.png";
const DragonAffordable = () => {
  return (
    <div className={styles.dragonWrap}>
      <div className={styles.dragonAffordale}>
        <h1>
          Why So <span className={styles.heading}>Affordable</span> ?
        </h1>
        <div className={styles.dollerWrapper}>
          <Image src={doller} className={styles.wrapper} />
        </div>
      </div>
      <div className={styles.dragonAffordaleDiscription}>
        <p>
          We Purchase all the tools officially & Share it in groups to many
          peoples that’s how a single purchased account is used by multiple
          peoples. We charge you a small amount from each user & hence the funds
          collected & we are able to share those expensive premium tools at more
          affordable rates.
        </p>
      </div>
      <div className={styles.drafonChoosing}>
        <h1>Why Choosing us ?</h1>
        <span className={styles.dragonBest}>What Makes us Best !</span>
      </div>
      <div></div>
    </div>
  );
};

export default DragonAffordable;
