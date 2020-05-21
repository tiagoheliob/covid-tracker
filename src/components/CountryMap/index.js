import React, { Component } from 'react';
import { Map, TileLayer, Polygon, GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { tileLayerProps, getPolygonStyle } from './constant';

import './countryMap.css';

const generateGeoJson = (coordinates) => {
  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "MultiPolygon",
      coordinates,
    }
  }
}

export default class CountryMap extends Component {
    state = {
        zoom: 4,
    }
    
    render() {
        const { lat, lon, coordinates, zoom } = this.props;

        if(!lat && !lon) {
          return <div>Loading..</div>
        }

        const position = [lat, lon];
        return (
          <Map center={position} zoom={this.state.zoom} className="map-container">
            <TileLayer
              {...tileLayerProps}
            />
            <GeoJSON key='my-geojson' data={generateGeoJson(coordinates)} style={getPolygonStyle}/>
            {/* <Polygon color="purple" positions={this.state.polylinePos} /> */}
          </Map>
        )
    }
    
}