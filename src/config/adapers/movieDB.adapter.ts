// movieDBFetcher.ts

import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    // api_key: '7e906cea346dc8399004fa25750d44ed',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
