import { FC, useEffect } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { CountriesMapContainer } from "./country-map.styles";
import { tileLayerProps, getPolygonStyle, generateGeoJson } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { mapDetailedInformationPage } from "../../redux/selectores/countries-selector";
import { fetchCountryPolygons } from "../../redux/actions/countryPolygon";
import CountryDetailedInfo from "../CountryDetailedInfo/country-detailed-info";

interface CountryMapProps {
  selectedCountry?: string;
}
const CountryMap: FC<CountryMapProps> = ({ selectedCountry }) => {
  const dispatch = useDispatch();
  const { countryPolygon, isLoading } = useSelector(mapDetailedInformationPage);
  const { lat, lon, geojson } = countryPolygon;

  // When the user selects a country fetch country location/geojson
  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchCountryPolygons(selectedCountry));
    }
  }, [selectedCountry]);

  if ((!lat && !lon) || isLoading) {
    return <div>Loading...</div>;
  }

  const position: LatLngExpression = [lat, lon];

  return (
    <CountriesMapContainer>
      <CountryDetailedInfo />
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
