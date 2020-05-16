import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';


let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <App />
    );
});

describe('The login component', () => {
    
    it('Check if matches the snapshot', () => {
        expect(wrapped).toMatchSnapshot();
    });

});