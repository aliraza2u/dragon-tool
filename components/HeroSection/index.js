import React from "react";
import styles from "./HeroSection.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../CustomButton";
import Image from "next/image";
import logo from "../../public/logo.png";
const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.heading}>
              <div className={styles.dragon}>
                <h1>
                  <span className={styles.best}>Pakistan's Best</span> Group Buy
                  Marketplace !
                </h1>
              </div>
              <div className={styles.dragonDetail}>
                <p>
                  As a Newbie Marketer , Freelancer or Blogger, Not Everyone Can
                  Afford Paid & Expensive tools at Their Startup. We Have
                  Introduce this service Just to Help them by Making the service
                  Affordable to Them.
                </p>
              </div>
              {/* <div className={styles.buttonWrap}> */}
              <CustomButton
                children={"Signup Today"}
                className={styles.signupDragon}
              />
              {/* </div> */}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.imageBackground}>
              <div className={styles.imageWrapper}>
                <Image src={logo} className={styles.img} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;