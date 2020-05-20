import React from 'react';
import { mount } from 'enzyme';
import { SearchInput } from '../index';

let wrapper;
let props;

beforeEach(() => {
    
    props = {
        searchByCountry: jest.fn(),
        searchWithoutCountry: jest.fn(),
        isLoading: false,
    };
    
    wrapper = mount(<SearchInput {...props} />);
});

describe('The Search Input component', () => {

    
    it("should trigger the search when the user hits enter on the input", () => {
        wrapper.find('input').simulate('keypress', { key: 'Enter' });

        expect(props.searchWithoutCountry).toHaveBeenCalled();
    });

    it("should trigger the search by country when country is specified", () => {
        wrapper.find('input').simulate('change', { target: { value: 'Any Country'} });
        wrapper.find('button').simulate('click');

        expect(props.searchByCountry).toHaveBeenCalled();
    });

    it("should trigger the search without country when there is no country defined", () => {
        wrapper.find('button').simulate('click');

        expect(props.searchWithoutCountry).toHaveBeenCalled();
    });

    //When it's loading the button  and the input should be disabled
    it('should disable the input and the button when isLoading property is true', () => {
        wrapper.setProps({ isLoading: true });
        
        expect(wrapper.find('button').prop('disabled')).toEqual(true);
        expect(wrapper.find('input').prop('disabled')).toEqual(true);
    })
});
