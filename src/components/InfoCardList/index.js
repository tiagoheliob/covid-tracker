import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard';
import { searchWithoutCountry } from '../../redux/actions/countrySearch';
import './infoCardList.css';

export const InfoCardList = ({ countries, searchWithoutCountry }) => {

    useEffect(() => {
        const fetchCountries = async () => {
            searchWithoutCountry();
        }
        fetchCountries();
    },[]);

    const cards = countries.map(country => {
        return (
            <Col md={4} sm={6} xs={12} key={country.country}>
                <InfoCard info={country}/>
            </Col>
        );
    })

    return (
        <Row className="info-card-list-container">
            {cards}
        </Row>
    )
}

const mapDispatchToProps = ({ countrySearch: { countries } }) => ({ countries });

export default connect(mapDispatchToProps, { searchWithoutCountry })(InfoCardList)