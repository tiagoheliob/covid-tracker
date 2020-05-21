import React, { useEffect, useState } from 'react';
import { Col, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchByCountry } from '../../redux/actions/countrySearch';
import { fetchCountryPolygons } from '../../redux/actions/countryPolygon';
import axios from 'axios';
import CountryMap from '../../components/CountryMap';
import { mapDetailedInformationPage } from './selector';

import './detailedInformation.css';

export default () => {
    const { countryName } = useParams();
    
    const countrySelector = useSelector(mapDetailedInformationPage);

    const { countrySearch, countryPolygon } = countrySelector;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchByCountry(countryName));
        dispatch(fetchCountryPolygons(countryName));
    }, []);
    
    const { countryInfo } = countryPolygon;
    const countryMapProps = countryInfo ? { lon: countryInfo.lon, lat: countryInfo.lat, coordinates: countryInfo.geojson.coordinates } : null;
    
    return (
        
        <div className="detailed-information-container">
            <Col md={6}>
                <CountryMap {...countryMapProps} />
            </Col>
            
        </div>
    )
};