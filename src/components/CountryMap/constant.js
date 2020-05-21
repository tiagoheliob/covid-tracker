export const tileLayerProps = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

export const getPolygonStyle = {
    color: '#343a40',
    weight: 5,
    opacity: 0.65
};

export const mapGeoJson = (coordinates) => ({
    type: "Feature",
    properties: {},
    geometry: {
      type: "MultiPolygon",
      coordinates,
    }
});

