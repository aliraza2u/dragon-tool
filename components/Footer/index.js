import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import dragonWhiteLogo from "../../public/dragonWhiteLogo.png";
import facebook from "../../public/facebook.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import dragonPanda from "../../public/dragonPanda.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Container>
        <Row>
          <Col sm={10}>
            {" "}
            <div className={styles.imageWrapper}>
              <Image src={dragonWhiteLogo} className={styles.wrapper} />
            </div>
            <div className={styles.dragonFooter}>
              <ul className={styles.dragonlist}>
                <li>Home</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>E2EE Policy</li>
              </ul>
            </div>
            <div className={styles.dragonIcon}>
              <ul className={styles.facebookWrapper}>
                <li>
                  <div className={styles.facebookIcon}>
                    <CgFacebook className={styles.facebook} />
                  </div>
                </li>
                <li>
                  <div className={styles.instragramIcon}>
                    <AiOutlineInstagram className={styles.instragram} />
                  </div>
                </li>
                <li>
                  <div className={styles.twitterIcon}>
                    <AiOutlineTwitter className={styles.twitter} />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={2}>
            <div className={styles.pamdaWrap}>
              <div className={styles.dragonPanda}>
                <Image src={dragonPanda} className={styles.panda} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.copyRighr}>
        <p>Copyright © 2022 | All Rights Reserved by Lotus Chips</p>
      </div>{" "}
    </div>
  );
};

export default Footer;
