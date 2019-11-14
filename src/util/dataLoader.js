const BASE_URL = 'http://react-cdp-api.herokuapp.com';

const joinParams = (paramsObject = {}) => {
    const paramsNames = Object.keys(paramsObject);
    return paramsNames.map(param => `${param}=${paramsObject[param]}`).join('&');
};

const requestMultiple = (api, paramsObject) => {
    const url = `${BASE_URL}/${api}?${joinParams(paramsObject)}`;
    console.log(url);
    return fetch(url).then(r => r.json());
};

const requestOne = (api, id) => {
    const url = `${BASE_URL}/${api}/${id}`;
    return fetch(url).then(r => r.json());
};

export const fetchFromSearch = (searchString, sortingType, searchOption) =>
    requestMultiple('movies', {
        sortBy: sortingType,
        sortOrder: 'desc',
        search: searchString,
        searchBy: searchOption,
        limit: 12
    });

export const fetchDefault = limit => requestMultiple('movies', { limit });

export const fetchById = id => requestOne('movies', id);