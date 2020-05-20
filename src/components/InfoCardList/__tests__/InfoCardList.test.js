import React from 'react';
import { InfoCardList } from '../index';
import { mount } from 'enzyme';
import Alert from '../../Alert';
import InfoCard from '../../InfoCard';

let wrapper = null;
let props;

beforeEach(() => {
    
    props = {
        countries: [],
        searchWithoutCountry: jest.fn(),
        error: '',
    };

    wrapper = mount(<InfoCardList {...props} />)
});


describe('The Info Card List', () => {

    it('verify if it shows the warning alert when there is no country ', () => {
        wrapper.setProps({ countries: 'Country not found' });

        const foundAlert = wrapper.find(Alert);

        expect(foundAlert.length).toEqual(1);
        expect(foundAlert.prop('id')).toEqual("warning-alert");
    });


    it('verify if it calls the action to fetch information when it first mounts', () => {
        expect(props.searchWithoutCountry).toHaveBeenCalled();
    });
    
    //InfoCard
    it('verify if renders the right amount of cards based on the quantity of countries passed ', () => {
        const countries = generateCountries(3);

        wrapper.setProps({ countries });

        expect(wrapper.find(InfoCard).length).toBe(3);
    });

    it('verify if it shows the error alert when there was an error while fetching the country', () => {
        wrapper.setProps({ error: true });

        const foundAlert = wrapper.find(Alert);

        expect(foundAlert.length).toEqual(1);
        expect(foundAlert.prop('id')).toEqual("error-alert");
    });

});

const generateCountries = (amount) => {
    let counter = 0;
    let countries = [];
    
    while(counter < amount) {
        countries = [...countries, 
            {
                country: `Mocked ${counter}`,
                cases: 'Mocked',
                deaths: 'Mocked',
                recovered: 'Mocked',
                active: 'Mocked',
                critical: 'Mocked'
            }
        ];
        counter++;
    }

    return countries;
}

