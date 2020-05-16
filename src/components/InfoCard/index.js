import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './infoCard.css';



export default ({ info }) => {
    const {
        country,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical
    } = info;
    
    return (
        <>
            <Card
                bg="dark"
                text="light"
                className="customized-card"
            >
                <Card.Header>{country}</Card.Header>
                <Card.Body>
                    <Card.Text >Cases: {cases}</Card.Text>
                    <Card.Text>Today Cases: {todayCases}</Card.Text>
                    <Card.Text>Deaths: {deaths}</Card.Text>
                    <Card.Text>Today Deaths: {todayDeaths}</Card.Text>
                    <Card.Text>Recovered: {recovered}</Card.Text>
                    <Card.Text>Active: {active}</Card.Text>
                    <Card.Text>Critical: {critical}</Card.Text>
                </Card.Body>
                {<Button className="learn-more-button" variant="dark">Learn more</Button>}
            </Card>
        </>
    )
}