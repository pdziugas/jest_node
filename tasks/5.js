const wordSearch = (string, word) => {
  let regex = new RegExp(word, "i");
  return regex.test(string);
};

console.log(wordSearch("Hello, my name is Dziugas", "dziugas"));

module.exports = {
  wordSearch,
};
