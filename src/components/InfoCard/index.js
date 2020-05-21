import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { mappedFieldsToRender } from './constant'; 
import './infoCard.css';


export const InfoCard = ({ info, history }) => {
    const validateInfo = (info) => info ? info : 'N/A';
    const fields = mappedFieldsToRender.map(({ field, label }) => {
        return (
            <Card.Text key={label}>
                {label}: { validateInfo(info[field]) }
            </Card.Text>
        );
    });

    const redirectToDetailedPage = () => {
        history.push(`/country/${info.country}`);
    }
    
    return (
        <>
            <Card
                bg="dark"
                text="light"
                className="customized-card"
            >
                <Card.Header>{info.country}</Card.Header>
                <Card.Body>
                    {fields}
                </Card.Body>
                {<Button className="learn-more-button" variant="dark" onClick={redirectToDetailedPage}>Learn more</Button>}
            </Card>
        </>
    )
};

export default withRouter(InfoCard);