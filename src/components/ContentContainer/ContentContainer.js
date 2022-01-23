import React from "react";
import Navigation from "../Navigation/Navigation"
import styles from "./ContentContainer"
import { Switch, Route, withRouter, useHistory, Redirect } from 'react-router-dom'
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import Alerts from '../Alerts/Alerts'

const ContentContainer = () => {

    const history = useHistory()
    const navigateTo = (url) => history.push(url)

    return (
        <div className="d-flex row no-wrap p-3">
            <Navigation currentPath={history.location.pathname}/>
            <Alerts />
            <Switch>
                <Redirect exact from="/" to="/first-step" />
                <Route path="/first-step" render={() => <FirstStep />} />
                <Route path="/second-step" render={() => <SecondStep/>} />
                <Route path="/third-step" render={() => <ThirdStep />} />
            </Switch>
        </div>
    )
}

export default withRouter(ContentContainer);