import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { tileLayerProps, getPolygonStyle, generateGeoJson } from "./constant";

import "./countryMap.css";

interface CountryMap {
  lat: number;
  lon: number;
  geojson: any;
  zoom: number;
  isLoading: boolean;
}
class CountryMap extends Component<CountryMap> {
  render() {
    const { lat, lon, geojson, zoom, isLoading } = this.props;

    if ((!lat && !lon) || isLoading) {
      return <Skeleton count={18} />;
    }

    const position: LatLngExpression = [lat, lon];
    return (
      <Map center={position} zoom={zoom} className="map-container">
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
