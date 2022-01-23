import React, { useEffect } from 'react'
import "bootstrap/scss/bootstrap.scss"
import './App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Alerts from "./components/Alerts/Alerts";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";
import { Switch, Route, withRouter, useHistory, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchNetworkElementsListThunk } from './store/actions/networkElements/thunks'

function App() {

    const history = useHistory()
    const dispatch = useDispatch()

    const navigateTo = (url) => history.push(url);

    useEffect(() => {
        dispatch(fetchNetworkElementsListThunk())
    }, [])

    return (
        <div className="App">
            <Header />
            <div className="d-flex row no-wrap p-3">
                <Navigation />
                <Alerts />
                <Switch>
                    <Redirect exact from="/" to="/first-step" />
                    <Route path="/first-step" render={() => <FirstStep />} />
                    <Route path="/second-step" render={() => <SecondStep/>} />
                    <Route path="/third-step" render={() => <ThirdStep />} />
                </Switch>
            </div>
        </div>
    );
}

export default withRouter(App);