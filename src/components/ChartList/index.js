import React from 'react';
import { Col } from 'react-bootstrap';
import PieChart from '../../components/PieChart';
import { mappedFieldsToChart } from './constant';
import Skeleton from 'react-loading-skeleton';

export default ({ countryData, isLoading }) => {

    const Charts = mappedFieldsToChart.map(chart => {
        const { group } = chart;
        let contentToBeRendered = null;

        if (!countryData || isLoading) {
            contentToBeRendered = <Skeleton circle width={200} height={200}/>;
        } else {
            const chartData = group.map( ({ label, field }) => ({ name: label, value: countryData[field] }) );
            contentToBeRendered = <PieChart data={chartData}/>;
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
