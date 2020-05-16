import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard';
import './infoCardList.css';


const cards = () => {
    let cardList = [];
    let i = 0;

    const data =  {
        country: "USA",
        cases: 1476178,
        todayCases: 18585,
        deaths: 88086,
        todayDeaths: 1174,
        recovered: 317739,
        active: 1070353,
        critical: 16141,
    }; 
    
    while(i < 10) {
        cardList = [...cardList, (() => <Col md={4} sm={6} xs={12} key={i}><InfoCard info={data}/></Col>)()];
        i++;
        
    }
    return cardList;
}

export default () => {
    return (
        <Row className="info-card-list-container">
            {cards()}
        </Row>
    )
}