import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { mappedFieldsToRender } from './constant';
import './infoCard.css';


export default ({ info }) => {
    const validateInfo = (info) => info ? info : 'N/A';
    const fields = mappedFieldsToRender.map(({ field, label }) => <Card.Text key={label}>{label}: {validateInfo(info[field])}</Card.Text>)
    
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
                {<Button className="learn-more-button" variant="dark">Learn more</Button>}
            </Card>
        </>
    )
}