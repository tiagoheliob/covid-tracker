import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput';
import InfoCardList from '../../components/InfoCardList';


import './main.css';


export const Main = ({ error }) => {
    
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

const mapDispatchToProps = ({ countrySearch: { error } }) => ({ error })
export default connect(mapDispatchToProps)(Main);