var houses = [
  { name: "Targaryen", motto: "Fire and Blood" },
  { name: "Stark", motto: "Winter is Coming" },
  { name: "Bolton", motto: "Our Blades Are Sharp" },
  { name: "Greyjoy", motto: "We Do Not Sow" },
  { name: "Tully", motto: "Family, Duty, Honor" },
  { name: "Arryn", motto: "As High as Honor" },
  { name: "Lannister", motto: "Hear Me Roar!" },
  { name: "Tyrell", motto: "Growing Strong" },
  { name: "Baratheon", motto: "Ours is the Fury" },
  { name: "Martell", motto: "Unbowed, Unbent, Unbroken" },
];

// ES5
function mottoES5(name) {
  for (var i = 0; i < houses.length; i++) {
    if (houses[i].name === name) {
      return houses[i].motto;
    }
  }
  return "";
}

console.log(mottoES5("Martell")); // Unbowed, Unbent, Unbroken

// ES6
const mottoES6 = (name) => {
  const search = houses.find((house) => house.name === name);
  return search ? search.motto : "";
};

console.log(mottoES6("Bolton")); // Our Blades Are Sharp

module.exports = {
  mottoES5,
  mottoES6,
};
