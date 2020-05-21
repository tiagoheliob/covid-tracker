import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../../../assets/icons/covid-tracker.png';
import './appBar.css';

export default () => {
    return (
        <>
            <Navbar bg="dark">
                <Navbar.Brand href="/" className="logo-container">
                    <img
                        alt=""
                        src={Logo}
                        width="200"
                        height="85"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    )
}
