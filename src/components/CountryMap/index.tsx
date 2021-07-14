import { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Skeleton from "react-loading-skeleton";
import { tileLayerProps, getPolygonStyle, generateGeoJson } from "./constant";

class CountryMap extends Component<any> {
  render() {
    const { lat, lon, geojson, zoom, isLoading } = this.props;

    if ((!lat && !lon) || isLoading) {
      return <Skeleton count={18} />;
    }

    console.log("geojson", geojson);

    const position: LatLngExpression = [lat, lon];
    return (
      <Map center={position} zoom={zoom} zoomControl={false}>
        <TileLayer {...tileLayerProps} />
        <GeoJSON
          key="my-geojson"
          data={generateGeoJson(geojson)}
          style={getPolygonStyle}
        />
      </Map>
    );
  }
}

export default CountryMap;
