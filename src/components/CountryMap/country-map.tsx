import { FC, useEffect } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { CountriesMapContainer, CenteredContainer } from "./country-map.styles";
import { tileLayerProps, getPolygonStyle, generateGeoJson } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { countryPolygonSelector } from "../../redux/selectors/countries-selector";
import { fetchCountryPolygons } from "../../redux/actions/countryPolygon";
import CountryDetailedInfo from "../CountryDetailedInfo/country-detailed-info";
import Spinner from "../Common/spinner";

interface CountryMapProps {
  selectedCountry?: string;
}
const CountryMap: FC<CountryMapProps> = ({ selectedCountry }) => {
  const dispatch = useDispatch();
  const { countryPolygon, isLoading } = useSelector(countryPolygonSelector);
  const { lat, lon, geojson } = countryPolygon;

  // When the user selects a country fetch country location/geojson
  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchCountryPolygons(selectedCountry));
    }
  }, [selectedCountry]);

  if (isLoading) {
    return (
      <CenteredContainer>
        <Spinner />
      </CenteredContainer>
    );
  }

  if (!lat && !lon) {
    return (
      <CenteredContainer>Select a country to enable Map view</CenteredContainer>
    );
  }

  const position: LatLngExpression = [lat, lon];

  return (
    <CountriesMapContainer>
      <CountryDetailedInfo selectedCountry={selectedCountry} />
      <Map center={position} zoomControl={false} zoom={5}>
        <TileLayer {...tileLayerProps} />
        <GeoJSON
          key="my-geojson"
          data={generateGeoJson(geojson)}
          style={getPolygonStyle}
        />
      </Map>
    </CountriesMapContainer>
  );
};

export default CountryMap;
