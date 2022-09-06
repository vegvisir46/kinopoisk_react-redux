const genresArray = (arr=[]) => {
  return arr.map(i => i.genre).join(', ')
};

export default genresArray;