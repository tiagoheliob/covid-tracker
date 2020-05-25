import React from 'react';
import { Card, Button } from 'react-bootstrap';
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
        },
        history: {
            push: jest.fn()
        },
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

    it('Should redirect the user when the "Learn More" button is clicked', () => {
        wrapper.find(Button).simulate('click');
        
        expect(props.history.push).toHaveBeenCalled();
    });

});