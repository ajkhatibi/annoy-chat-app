import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GetCode from './GetCode';
import SubmitCode from './SubmitCode';
import HomePage from './HomePage';

export default RouterComponents = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='pageOne' component={GetCode} hideNavBar initial />
                <Scene key='pageTwo' component={SubmitCode} hideNavBar />
                <Scene key='homePage' component={HomePage} title='Get To Chatting!' />
            </Scene>
        </Router>
    );
};
