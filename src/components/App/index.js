import React from 'react';
import AppBar from '../AppBar'
import Main from '../../pages/Main/';
import DetailedInformation from '../../pages/DetailedInformation';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../../redux/store';
import './app.css';

export default () => {
    return (
        <Provider store={store}>
            <AppBar />
            <BrowserRouter>
            
                <Route component={Main} path="/" exact/>
                <Route component={DetailedInformation} path="/country/:countryName" />
            </BrowserRouter>
        </Provider>
    );
}