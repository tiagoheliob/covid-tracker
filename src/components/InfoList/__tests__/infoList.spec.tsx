import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from 'react-loading-skeleton';
import InfoList from '../index';
import { countryData } from '../../../helpers/testHelper';
import { mappedFieldsToRender } from '../constant';

describe('The country Map component', () => {

    let wrapper = null;
    const props = {
        country: countryData,
        isLoading: false,
    };

    beforeEach(() => {
        wrapper = shallow(
            <InfoList {...props} />
        );
    });

    it('Should show the list with all fields mapped if it is defined', () => {
        expect(wrapper.find('li').length).toBe(mappedFieldsToRender.length);
    });

    it('should show the loading if there is not country ', () => {
        wrapper.setProps({ country: null });
        expect(wrapper.find(Skeleton).length).toBe(1);
    });

    it('should show the loading component if loading is true', () => {
        wrapper.setProps({ isLoading: true });
        expect(wrapper.find(Skeleton).length).toBe(1);
    });

})

