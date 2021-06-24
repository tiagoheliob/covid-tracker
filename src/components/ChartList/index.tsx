import React from "react";
import { Col } from "react-bootstrap";
import PieChart from "../../components/PieChart";
import { mappedFieldsToChart } from "./constant";
import Skeleton from "react-loading-skeleton";

export default (countryData, isLoading) => {
  return mappedFieldsToChart.map((chart) => {
    const { group } = chart;
    let contentToBeRendered = null;

    if (!countryData || isLoading) {
      contentToBeRendered = <Skeleton circle width={200} height={200} />;
    } else {
      const chartData = group.map(({ label, field }) => ({
        name: label,
        value: countryData[field],
      }));

      if (chartData.some((data) => !data.value)) {
        contentToBeRendered = <b>Not available</b>;
      } else {
        contentToBeRendered = <PieChart data={chartData} />;
      }
    }

    return (
      <Col md={3} key={chart.chartTitle}>
        <h6>{chart.chartTitle}</h6>
        {contentToBeRendered}
      </Col>
    );
  });
};
