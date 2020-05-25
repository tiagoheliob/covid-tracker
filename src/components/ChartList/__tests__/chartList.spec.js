import React from 'react';
import ChartList from '../index';
import { mount } from 'enzyme';
import { mappedFieldsToChart } from '../constant';
import PieChart from '../../../components/PieChart';
import Skeleton from 'react-loading-skeleton';
import { countryData } from '../../../helpers/testHelper';

describe('The Chart List Component', () => {

    let wrapper = null;
    let props = {};

    beforeEach(() => {
        props = { countryData: null, isLoading: false };
        wrapper = mount(
            <ChartList {...props} />
        );
    })

    it('should show the Loading Component for each chart when there is no data', () => {
        expect(wrapper.find(Skeleton).length).toEqual(mappedFieldsToChart.length);
    });

    it('should show chart when the data is provided', () => {
        wrapper.setProps({ countryData });
        expect(wrapper.find(PieChart).length).toEqual(mappedFieldsToChart.length);
    });
    
});