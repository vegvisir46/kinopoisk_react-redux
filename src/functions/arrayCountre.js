const countryArray = (arr=[]) => {
  return arr.map(i => i.country).join(', ')
};

export default countryArray;