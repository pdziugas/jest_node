const say = (string1) => (string2) => string1 + " " + string2;

console.log(say("Hello,")("it's me")); // Hello, it's me

module.exports = {
  say,
};
