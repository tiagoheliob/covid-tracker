import { FC } from "react";
import PieChart from "../../PieChart";
import { mappedFieldsToChart } from "./country-detailed-info-charts.constant";
import {
  ChartContainer,
  ChartTitle,
} from "./country-detailed-info-charts.styles";

interface CountryDetailedInfoChartsProps {
  countryData: [key: string];
}
const CountryDetailedInfoCharts: FC<CountryDetailedInfoChartsProps> = ({
  countryData,
}) => {
  const renderCharts = () => {
    if (!countryData) {
      return null;
    }

    return mappedFieldsToChart.map((chart) => {
      const { group, chartTitle } = chart;
      const chartData = group.map(({ label, field }) => ({
        name: label,
        value: countryData[field],
      }));
      return (
        <ChartContainer>
          <ChartTitle>{chartTitle}</ChartTitle>
          <PieChart width={100} height={120} data={chartData} />
        </ChartContainer>
      );
    });
  };

  return <>{renderCharts()}</>;
};

export default CountryDetailedInfoCharts;
