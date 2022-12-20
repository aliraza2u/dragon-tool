import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../FaqDragon/FaqDragon.module.scss";
import { faq } from "./FaqDragonApi";
const FaqDragon = () => {
    return (
        <div className={styles.faqDragonWrapper}>
            <div className={styles.FaqDragon}>
                <h1>FAQ's</h1>
            </div>
            <Container>
                <Row>
                    {faq.map((x, i) => (
                        <Col key={i} xs={12} md={6}>
                            <div className={styles.faqWrapper}>
                                <h3>{x.faqHeading}</h3>
                                <p>{x.faqDetail}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default FaqDragon;
