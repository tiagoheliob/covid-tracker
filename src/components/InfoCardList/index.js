import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard';
import Pagination from '../Pagination';
import Alert from '../Alert/index';
import { searchWithoutCountry } from '../../redux/actions/countrySearch';
import NotFoundEmoji from '../../../assets/icons/sad-emoji.svg';
import AlertIcon from '../../../assets/icons/alert.svg';
import { paginate } from '../../helpers/pagination';
import selector from './selector';
import './infoCardList.css';

export const InfoCardList = ({ countries, searchWithoutCountry, error }) => {

    const [page, setPage] = useState(1);
    const [paginatedCountry, setPaginatedCountry] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            searchWithoutCountry();
        }
        fetchCountries();
    },[]);  

    useEffect(() => {
        
        if (countries.length) {
            setPaginatedCountry(paginate(countries, 20));
        }

    }, [countries])

    const onSelectPage = (page) => setPage(page);

    const generateCards = (countries) => {

        if(!paginatedCountry) {
            return;
        }
        console.log(paginatedCountry);
        return paginatedCountry.dataPaginated[page].map(country =>
            <Col md={4} sm={6} xs={12} key={country.country}>
                <InfoCard info={country}/>
            </Col>
        );
    }

    const renderPagination = () => {
        
        if (!paginatedCountry) {
            return;
        }

        return (            
            <Pagination 
                onSelectPage={onSelectPage}
                activatePage={page} 
                pagesSize={paginatedCountry.numberOfPages}
            />
        );
    }

    const renderMainContent = () => {
        if (typeof countries === 'string'){
            return <Alert id="warning-alert" message="Country not found" icon={NotFoundEmoji}/>;
        } else {
            return Array.isArray(countries) ? generateCards(countries) : generateCards([countries]);
        }
    
        if (error) {
            return <Alert id="error-alert" icon={AlertIcon} message="There was an error while making your request" />
        }
    }

    return (
        <>
            <Row className="info-card-list-container">
                {renderMainContent()}
            </Row>
            <Row>
                {renderPagination()}
            </Row>
        </>
    );
}

const mapStateToProps = selector;

export default connect(mapStateToProps, { searchWithoutCountry })(InfoCardList)