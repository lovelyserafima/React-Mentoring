import fetch from 'node-fetch';
import { DESC, MOVIES } from './dataLoader.Constants';
import { DEFAULT_LIMIT, GENRES } from '../../components/constants/CommonConstants';

const BASE_URL = 'http://react-cdp-api.herokuapp.com';

const joinParams = (paramsObject = {}) => {
  const paramsNames = Object.keys(paramsObject);
  return paramsNames.map((param) => `${param}=${paramsObject[param]}`).join('&');
};

const requestMultiple = (api, paramsObject) => {
  const url = `${BASE_URL}/${api}?${joinParams(paramsObject)}`;
  console.log(url);
  return fetch(url).then((r) => r.json());
};

const requestOne = (api, id) => {
  const url = `${BASE_URL}/${api}/${id}`;
  return fetch(url).then((r) => r.json());
};

export const fetchByGenres = (searchString) => requestMultiple(MOVIES, {
  search: searchString,
  searchBy: GENRES,
  limit: DEFAULT_LIMIT,
});

export const fetchFromSearch = (searchString, sortingType, searchOption) => requestMultiple(MOVIES, {
  sortBy: sortingType,
  sortOrder: DESC,
  search: searchString,
  searchBy: searchOption,
  limit: DEFAULT_LIMIT,
});
export const fetchById = (id) => requestOne(MOVIES, id);
