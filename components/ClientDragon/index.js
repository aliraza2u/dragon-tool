import React from "react";
import styles from "../ClientDragon/ClientDragon.module.scss";
import Image from "next/image";
import client from "../../public/client.png";
import { Col, Container, Row } from "react-bootstrap";
import { card } from "./CardApi";
import user from "../../public/user.png";
const index = () => {
  return (
    <div className={styles.clientWrapper}>
      <div className={styles.client}>
        <div className={styles.imageWrapper}>
          <Image src={client} className={styles.wrapper} />
        </div>
        <h1>Happy Clients</h1>
      </div>
      <div className={styles.cardWrap}>
        <Container>
          <Row>
            {card.map((x) => (
              <Col xs={12} md={4} className={styles.cardCol}>
                <div
                  className={styles.card}
                  style={{ backgroundImage: `url(${x.url})` }}
                >
                  <div className={styles.wrapper}>
                    <p>{x.detail}</p>
                  </div>
                  <div className={styles.nameWrapper}>
                    <div className={styles.imageWrapper}>
                      <Image src={user} className={styles.wrapper} />
                    </div>
                    <div className={styles.designerWrapper}>
                      <h1>{x.name}</h1>
                      <p>{x.designer}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default index;
