import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'react-leaflet';
import Skeleton from 'react-loading-skeleton';
import CountryMap from '../index';

describe('The country Map component', () => {

    let wrapper = null;
    const props = {
        lat: -1,
        lon: -2,
        geojson: {
            coordinates: [],
            type: 'any',
        },
        zoom: 4,
        isLoading: false, 
    };

    beforeEach(() => {
        wrapper = shallow(
            <CountryMap {...props} />
        );
    });

    it('should show the loading if there is not latitude, longitude', () => {
        wrapper.setProps({ lat:null, lon: null });
        expect(wrapper.find(Skeleton).length).toBe(1);
    });

    it('should show the loading component if loading is true', () => {
        wrapper.setProps({ isLoading: true });
        expect(wrapper.find(Skeleton).length).toBe(1);
    });

    it('Should show the map if there is data and it is not loading', () => {
        expect(wrapper.find(Map).length).toBe(1);
    });


})

