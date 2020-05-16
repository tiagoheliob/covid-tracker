import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard';
import Alert from '../Alert/index';
import { searchWithoutCountry } from '../../redux/actions/countrySearch';
import NotFoundEmoji from '../../../assets/icons/sad-emoji.svg';
import AlertIcon from '../../../assets/icons/alert.svg';
import './infoCardList.css';

export const InfoCardList = ({ countries, searchWithoutCountry, error }) => {

    useEffect(() => {
        const fetchCountries = async () => {
            searchWithoutCountry();
        }
        fetchCountries();
    },[]);  

    const generateCards = (countries) => {
        return countries.map(country => {
            return (
                <Col md={4} sm={6} xs={12} key={country.country}>
                    <InfoCard info={country}/>
                </Col>
            );
        });
    }

    //Silly workaround because the API returns http code 200 with a string "Country not found"
    let contentToBeRendered = null;
    if (typeof countries === 'string'){
        contentToBeRendered = <Alert message="Country not found" icon={NotFoundEmoji}/>;
    } else {
        contentToBeRendered = Array.isArray(countries) ? generateCards(countries) : generateCards([countries]);
    }

    if (error) {
        contentToBeRendered = <Alert icon={AlertIcon} message="There was an error while processing your request" />
    }

    return (
        <Row className="info-card-list-container">
            {contentToBeRendered}
        </Row>
    );
}

const mapDispatchToProps = ({ countrySearch: { countries, error } }) => ({ countries, error });

export default connect(mapDispatchToProps, { searchWithoutCountry })(InfoCardList)