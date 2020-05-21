import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SearchInput from '../../components/SearchInput';
import InfoCardList from '../../components/InfoCardList';

import './main.css';

export default () => {
    return (
        <>
            <Container className="main-page-container">
                <Row>
                    <SearchInput />
                </Row>
            </Container>
            <InfoCardList />
        </>
    )
}