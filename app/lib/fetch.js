import axios from 'lib/axios';
import qs from 'query-string';

export const fetch = (START, SUCCESS, ERROR) => {
    return (url, queryFields) => {
        return async dispatch => {
            dispatch({type: START});
            /* stringify convert from object { prop1: 'a', prop2: 'b'}
             * to query string: prop1=a&prop2=b
             */
            const queryString = qs.stringify(queryFields);
            try {
                const {data} = await axios.get(
                    queryString ?
                        `${url}?${queryString}` :
                        url
                );
                dispatch({
                    type: SUCCESS,
                    payload: data
                });
            } catch (err) {
                dispatch({
                    type: ERROR,
                    payload: err,
                    error: true
                });
            }
        };
    };
};