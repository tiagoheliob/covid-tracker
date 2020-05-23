import React from 'react';
import { Card } from 'react-bootstrap';
import { mount } from 'enzyme';
import { mappedFieldsToRender } from '../constant';
import { InfoCard } from '../index';

let props = {};
let wrapper = null;

beforeEach(() => {
    props = {
        info: {
                country: `Mocked`,
                cases: 'Mocked',
                deaths: 'Mocked',
                recovered: null,
                active: 'Mocked',
                critical: 'Mocked'
        }
    };
    wrapper = mount(<InfoCard {...props} />)
    
});

describe('The Info Card', () => {

    it('verifies if renders the right amount of text based on the mapper constant', () => {
        expect(wrapper.find(Card.Text).length).toEqual(mappedFieldsToRender.length);
    });

    it('should shows N/A (not available) when the API does not return the field', () => {
        expect(wrapper.find(Card.Text).at(2).text()).toContain("N/A");
    });
});