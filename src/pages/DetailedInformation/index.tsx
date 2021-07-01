import { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CountryMap from "../../components/CountryMap";
import InfoList from "../../components/InfoList";
import chartList from "../../components/ChartList";
import { searchByCountry } from "../../redux/actions/countrySearch";
import { fetchCountryPolygons } from "../../redux/actions/countryPolygon";
import { mapDetailedInformationPage } from "./selector";

import "./detailedInformation.css";

const DetailedInformation = ({ history }) => {
  // const { countryName } = useParams();
  // const dispatch = useDispatch();
  // const countrySelector = useSelector(mapDetailedInformationPage);

  // const { countrySearch, countryPolygon, isLoadingMap, isLoadingCountryData } =
  //   countrySelector;
  // const countryMapProps = {
  //   ...countryPolygon,
  //   zoom: 4,
  //   isLoading: isLoadingMap,
  // };

  // useEffect(() => {
  //   dispatch(searchByCountry(countryName));
  //   dispatch(fetchCountryPolygons(countryName));
  // }, []);

  // const onClickBackButton = () => {
  //   history.push("/");
  // };

  // return (
  //   <div className="detailed-information-container">
  //     <Button variant="outline-dark back-button" onClick={onClickBackButton}>
  //       &#8592; Back To Main Menu
  //     </Button>
  //     <Row>
  //       <Col md={6} sm={12} className="col-space-divider">
  //         <h3>Country Location</h3>
  //         <CountryMap {...countryMapProps} />
  //       </Col>
  //       <Col md={6} sm={12} className="col-space-divider">
  //         <h3>Detailed Information</h3>
  //         <InfoList country={countrySearch} isLoading={isLoadingCountryData} />
  //       </Col>
  //     </Row>
  //     <h3>Information side by side</h3>
  //     {chartList(countrySearch, isLoadingCountryData)}
  //   </div>
  // );

  return <div>Something</div>;
};

export default DetailedInformation;
