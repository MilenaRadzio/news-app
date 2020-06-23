const superagent = require('superagent');

const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = 'b5d7a3f407294ca282a237ac1a24a6fc';

const EVERYTHING_ENDPOINT_PATH = '/everything';

const getMainArticles = (query) => superagent
  .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
  .query({...query, country: 'pl', apiKey: API_KEY});

const getCats = (query) => superagent
  .get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
  .query({language: 'pl',...query, apiKey: API_KEY, q: 'Cats'});

  module.exports = {
    getMainArticles,
    getCats,
  };
