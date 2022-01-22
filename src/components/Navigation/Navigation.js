import React from "react";
import styles from "./Navigation.module.scss"
import { Tab, Row, Col, Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div className={`{${styles.navigation}}`}>
            <Tab.Container defaultActiveKey="firstStep">
                <Row>
                    <Col sm={3}>
                    <Nav variant="round-pills" className="flex-column">
                        <Nav.Item className={`${styles.customNavItem}`}>
                            <Nav.Link eventKey="firstStep" className="cursor-pointer m-4 mt-2">1</Nav.Link>
                            <div className={`${styles.navText}`}>
                                <span className={`${styles.navTitle}`}>Network Element</span>
                                <span className={`${styles.navSubtitle}`}>At least one Network Element shall be selected</span>
                            </div>
                        </Nav.Item>
                        <Nav.Item className={`${styles.customNavItem}`}>
                            <Nav.Link eventKey="secondStep" className="cursor-pointer m-4 mt-2">2</Nav.Link>
                            <div className={`${styles.navText}`}>
                                <span className={`${styles.navTitle}`}>Operation Type</span>
                                <span className={`${styles.navSubtitle}`}>At least one Operation Type shall be selected</span>
                            </div>
                        </Nav.Item>
                        <Nav.Item className={`${styles.customNavItem}`}>
                            <Nav.Link eventKey="thirdStep" className="cursor-pointer m-4 mt-2">3</Nav.Link>
                            <div className={`${styles.navText}`}>
                                <span className={`${styles.navTitle}`}>Summary</span>
                                <span className={`${styles.navSubtitle}`}>Statement od scheduled operation</span>
                            </div>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="firstStep">
                        x
                        </Tab.Pane>
                        <Tab.Pane eventKey="secondStep">
                        xx
                        </Tab.Pane>
                        <Tab.Pane eventKey="thirdStep">
                        xxx
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    )
}

export default Navigation;