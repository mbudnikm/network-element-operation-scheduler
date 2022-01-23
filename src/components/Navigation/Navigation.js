import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.scss"
import { Tab, Nav } from 'react-bootstrap'
import { withRouter, useHistory } from 'react-router-dom'

const Navigation = () => {

    const history = useHistory();
    const currentPath = history.location.pathname
    const [selectedPath, setSelectedPath] = useState(currentPath)

    const navigateTo = (url) => history.push(url);

    useEffect(() => {
        setSelectedPath(currentPath)
    }, [currentPath])

    return (
        <div className={`{${styles.navigation}} w-25`}>
            <Tab.Container activeKey={currentPath}>
                <Nav variant="round-pills" className="flex-column">
                    <Nav.Item className={`${styles.customNavItem}`}>
                        <Nav.Link 
                            onClick={() => navigateTo("/first-step")}
                            eventKey="/first-step"
                            className="cursor-pointer m-4 mt-2">
                                1
                        </Nav.Link>
                        <div className={`${styles.navText}`}>
                            <span className={`${styles.navTitle}`}>Network Element</span>
                            <span className={`${styles.navSubtitle}`}>At least one Network Element shall be selected</span>
                        </div>
                    </Nav.Item>
                    <Nav.Item className={`${styles.customNavItem}`}>
                        <Nav.Link 
                            onClick={() => navigateTo("/second-step")} 
                            eventKey="/second-step"  
                            className="cursor-pointer m-4 mt-2">
                                2
                        </Nav.Link>
                        <div className={`${styles.navText}`}>
                            <span className={`${styles.navTitle}`}>Operation Type</span>
                            <span className={`${styles.navSubtitle}`}>At least one Operation Type shall be selected</span>
                        </div>
                    </Nav.Item>
                    <Nav.Item className={`${styles.customNavItem}`}>
                        <Nav.Link 
                            onClick={() => navigateTo("/third-step")}
                            eventKey="/third-step" 
                            className="cursor-pointer m-4 mt-2">
                                3
                        </Nav.Link>
                        <div className={`${styles.navText}`}>
                            <span className={`${styles.navTitle}`}>Summary</span>
                            <span className={`${styles.navSubtitle}`}>Statement od scheduled operation</span>
                        </div>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
        </div>
    )
}

export default withRouter(Navigation);