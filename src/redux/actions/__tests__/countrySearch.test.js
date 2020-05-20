import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as countrySearchAction from '../countrySearch';
import { defaultState } from '../../reducers/countrySearch';

const middlewares  = [thunk];
const mockStore = configureMockStore(middlewares);

const expectedSuccessAction = [
    { type: countrySearchAction.CountrySearch.LOADING },
    { type: countrySearchAction.CountrySearch.SUCCESS, payload: [] },
]
const expectedErrorAction = [
    { type: countrySearchAction.CountrySearch.LOADING },
    { type: countrySearchAction.CountrySearch.ERROR }
];

let store = null;

const generateStubRequest = (path, httpCode, payload) => {
    moxios.stubRequest(`${countrySearchAction.baseURL}/${path}`, {
        status: httpCode,
        response: payload
    });
}

describe('The country search action creator', () => {
    
    beforeEach(() => {
        store = mockStore(defaultState);
        moxios.install();
    });

    afterEach(() => moxios.uninstall());
    

    it('test if the action dispatch loading and success when country is not specified', async (done) => {
        
        generateStubRequest('countries', 200, []);

        store.dispatch(countrySearchAction.searchWithoutCountry()).then(() => {
            expect(store.getActions()).toEqual(expectedSuccessAction);
            done();
        });

    });

    it('test if the action dispatch loading and success when country is specified', async (done) => {
        const country = 'any';

        generateStubRequest(`countries/${country}`, 200, []);

        store.dispatch(countrySearchAction.searchByCountry(country)).then(() => {
            expect(store.getActions()).toEqual(expectedSuccessAction);
            done();
        });

    });

    it('test if the action dispatch loading and success when country is specified', async (done) => {
        const country = 'any';
        const expectedActions = [
            { type: countrySearchAction.CountrySearch.LOADING },
            { type: countrySearchAction.CountrySearch.SUCCESS, payload: [] },
        ]

        generateStubRequest(`countries/${country}`, 200, []);

        store.dispatch(countrySearchAction.searchByCountry(country)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });

    });

    it('test if the generic method throws an exception when the request returns 500s', async(done) => {
        generateStubRequest(`countries`, 500, []);

        store.dispatch(countrySearchAction.genericSearch('', store.dispatch)).then(() => {
            expect(store.getActions()).toEqual(expectedErrorAction);
            done();
        });
    });

});
