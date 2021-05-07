const wordSearch = (word, string) => {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');  // g - for all occurrences
  return regex.test(string);
};

module.exports = {
  wordSearch,
};
