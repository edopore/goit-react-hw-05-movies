const URL_API =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const URL_MOVIE_BASE = 'https://api.themoviedb.org/3/movie';
const URL_MOVIE_QUERIES_BASE = 'https://api.themoviedb.org/3/search/movie';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ4ODM0NTRiZTdhNDJkODgwZWNkNDU1ZjgzYjIxYSIsInN1YiI6IjY1ZGQ1MjgyOTAzYzUyMDE3Y2JiOTVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Z-bN0gGfdmKFEQdkBf_3L-z6zQet7OI_BQnXMIuDrA',
  },
};
export const fetchMovies = async () => {
  let data = [];
  try {
    const response = await fetch(URL_API, OPTIONS);
    data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return data;
  }
};
export const fetchMoviesById = async movieId => {
  try {
    const response = await fetch(URL_MOVIE_BASE + '/' + movieId, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieByQuery = async query => {
  try {
    const response = await fetch(
      URL_MOVIE_QUERIES_BASE +
        `?query=${query}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
