import React from 'react';
import { Col } from 'react-bootstrap';
import PieChart from '../../components/PieChart';
import { mappedFieldsToChart } from './constant';
import Skeleton from 'react-loading-skeleton';

export default ({ countryData }) => {
    
    const Charts = mappedFieldsToChart.map(chart => {
        const { group } = chart;
        let contentToBeRendered = null;

        if (countryData) {
            const chartData = group.map( ({ label, field }) => ({ name: label, value: countryData[field] }) );
            contentToBeRendered = <PieChart data={chartData}/>;
        } else {
            contentToBeRendered = <Skeleton circle width={200} height={200}/>;
        }
        

        return(
            <Col md={3} key={chart.chartTitle}>
                <h6>{chart.chartTitle}</h6>
                {contentToBeRendered}
            </Col>
        );
    });

    return Charts;
}
