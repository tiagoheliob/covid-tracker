import React from 'react';
import AppBar from '../AppBar'
import Main from '../../pages/Main/';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import './app.css';

export default () => {
    return (
        <Provider store={store}>
            <AppBar />
            <Main />
        </Provider>
    );
}