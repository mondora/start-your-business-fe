import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {fetch, __RewireAPI__ as fetchModule} from 'lib/fetch';

chai.use(sinonChai);

describe('fetch', () => {

    const START = 'START';
    const SUCCESS = 'SUCCESS';
    const ERROR = 'ERROR';

    const fetchFn = fetch(START, SUCCESS, ERROR)('url');

    after(() => {
        fetchModule.__ResetDependency__('axios');
    });

    const axiosSuccessMock = {
        get: async () => ({data: 'this is a payload'})
    };
    const axiosErrorMock = {
        get: async () => {
            throw 'this is an error';
        }
    };

    it('dispatches START immediately', async () => {
        fetchModule.__Rewire__('axios', axiosSuccessMock);
        const expected = {
            type: START
        };
        const dispatch = sinon.spy();
        await fetchFn(dispatch);
        expect(dispatch).to.be.calledWith(expected);
    });

    it('dispatches SUCCESS after api success', async () => {
        fetchModule.__Rewire__('axios', axiosSuccessMock);
        const expected = {
            type: SUCCESS,
            payload: 'this is a payload'
        };
        const dispatch = sinon.spy();
        await fetchFn(dispatch);
        expect(dispatch).to.be.calledWith(expected);
    });

    it('dispatches ERROR after api error', async () => {
        fetchModule.__Rewire__('axios', axiosErrorMock);
        const expected = {
            type: ERROR,
            payload: 'this is an error',
            error: true
        };
        const dispatch = sinon.spy();
        await fetchFn(dispatch);
        expect(dispatch).to.be.calledWith(expected);
    });

    describe('for url parameter', () => {

        const fetchFn = fetch(START, SUCCESS, ERROR);

        it('passes to axios url', async () => {
            const url = 'thisIsAnUrl';

            const axios = {
                get: sinon.spy()
            };
            fetchModule.__Rewire__('axios', axios);
            const dispatch = sinon.spy();
            await fetchFn(url)(dispatch);
            expect(axios.get).to.be.calledWith(url);
        });

    });

    describe('for queryFields parameter', () => {

        const fetchFn = fetch(START, SUCCESS, ERROR);

        it('passes to axios the complete url', async () => {
            const axios = {
                get: sinon.spy()
            };
            fetchModule.__Rewire__('axios', axios);
            const dispatch = sinon.spy();
            await fetchFn(
                'thisIsAnUrl',
                {key1: 'value1', key2: 'value2'}
            )(dispatch);
            expect(axios.get).to.be.calledWith('thisIsAnUrl?key1=value1&key2=value2');
        });

        it('encodes query fields', async () => {
            const axios = {
                get: sinon.spy()
            };
            fetchModule.__Rewire__('axios', axios);
            const dispatch = sinon.spy();
            await fetchFn(
                'thisIsAnUrl',
                {key1: ['value1', 'value2']}
            )(dispatch);
            expect(axios.get).to.be.calledWith('thisIsAnUrl?key1=value1&key1=value2');
        });

    });

});