import Constants from "../components/constants/Constants";

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

export const fetchByGenres = (searchString) =>
    requestMultiple(Constants.MOVIES, {
        search: searchString,
        searchBy: Constants.GENRES,
        limit: Constants.DEFAULT_LIMIT
    });

export const fetchFromSearch = (searchString, sortingType, searchOption) =>
    requestMultiple(Constants.MOVIES, {
        sortBy: sortingType,
        sortOrder: Constants.DESC,
        search: searchString,
        searchBy: searchOption,
        limit: Constants.DEFAULT_LIMIT
    });

export const fetchDefault = limit => requestMultiple(Constants.MOVIES, { limit });

export const fetchById = id => requestOne(Constants.MOVIES, id);