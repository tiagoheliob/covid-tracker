import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CountryMap from '../../components/CountryMap';
import InfoList from '../../components/InfoList';
import ChartList from '../../components/ChartList';
import { searchByCountry } from '../../redux/actions/countrySearch';
import { fetchCountryPolygons } from '../../redux/actions/countryPolygon';
import { mapDetailedInformationPage } from './selector';

import './detailedInformation.css';

export default ({ history }) => {
    
    const { countryName } = useParams();
    const dispatch = useDispatch();
    const countrySelector = useSelector(mapDetailedInformationPage);

    const { countrySearch, countryPolygon } = countrySelector;
    const countryMapProps = {...countryPolygon, zoom: 4 };


    useEffect(() => {
        dispatch(searchByCountry(countryName));
        dispatch(fetchCountryPolygons(countryName));
    }, []);

    const onClickBackButton = () => {
    
        history.push('/');
    }
    
    return (
        <div className="detailed-information-container">
            <Button variant="outline-dark back-button" onClick={onClickBackButton}>&#8592; Back To Main Menu</Button>
            <Row>
                <Col md={6} sm={12} className="col-space-divider">
                    <h3>Country Location</h3>
                    <CountryMap {...countryMapProps}/>
                </Col>
                <Col md={6} sm={12} className="col-space-divider">
                    <h3>Detailed Information</h3>
                    <InfoList country={countrySearch}/>
                </Col>
            </Row>
            <h3>Information side by side</h3>
            <Row className="chart-container">
                <ChartList countryData={countrySearch} />
            </Row>
        </div>
    )
};