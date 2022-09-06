export const setSortByType = (type) => ({
  type: 'SET_SORT_BY_TYPE',
  payload: type,
});

export const setSortByGenre = (genre) => ({
  type: 'SET_SORT_BY_GENRE',
  payload: genre,
});

export const setSortByCountry = (country) => ({
  type: 'SET_SORT_BY_COUNTRY',
  payload: country,
});

export const setMonth = (month) => ({
  type: 'SET_MONTH',
  payload: month,
});

export const setYear = (year) => ({
  type: 'SET_YEAR',
  payload: year,
});

export const setSearch = (search) => ({
  type: 'SET_SEARCH',
  payload: search,
});