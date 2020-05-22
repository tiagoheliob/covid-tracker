import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CountryMap from '../../components/CountryMap';
import PieChart from '../../components/PieChart';
import InfoList from '../../components/InfoList';

import { searchByCountry } from '../../redux/actions/countrySearch';
import { fetchCountryPolygons } from '../../redux/actions/countryPolygon';
import { mapDetailedInformationPage } from './selector';
import { mappedFieldsToChart } from './constant';
import './detailedInformation.css';

export default () => {
    const { countryName } = useParams();
    const countrySelector = useSelector(mapDetailedInformationPage);
    const dispatch = useDispatch();
    const { countrySearch, countryPolygon } = countrySelector;
    const { countryInfo } = countryPolygon;
    const countryMapProps = countryInfo ? { lon: countryInfo.lon, lat: countryInfo.lat, coordinates: countryInfo.geojson.coordinates } : null;
    const countryProps = Array.isArray(countrySearch.countries) ? null : countrySearch.countries;
    
    const charts = mappedFieldsToChart.map(chart => {
        const { group } = chart;
        const { countries } = countrySearch;
        
        const chartData = group.map( group => ({ name: group.label, value: countries[group.field] }) );
        return(
            <Col md={3} key={chart.chartTitle}>
                <h5>{chart.chartTitle}</h5>
                <PieChart data={chartData}/>
            </Col>
        )
    });

    useEffect(() => {
        dispatch(searchByCountry(countryName));
        dispatch(fetchCountryPolygons(countryName));
    }, []);
    

    return (
        
        <div className="detailed-information-container">
            <Row>
                <Col md={6}>
                    <h3>Country Location</h3>
                    <CountryMap {...countryMapProps} />
                </Col>
                <Col md={6}>
                    <h3>Detailed Information</h3>
                    <InfoList country={countryProps}/>
                </Col>
            </Row>
            <Row className="chart-container">
                {charts}
            </Row>
            
        </div>
    )
};