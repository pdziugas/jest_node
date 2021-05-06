# JEST-NODE tasks

## Task 1

Create two versions of a function called range which takes two numbers x and y and
returns an array filled with all numbers from x (inclusive) to y (exclusive)

---

## Task 2

Create two versions of a function called sum which takes a list of numbers and
returns a sum of them

---

## Task 3

Given a list of the following major Houses of Westeros and their respective mottos:

```js
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
```

Write two versions of a function that, when passed the name of a House, returns its
motto.

a) Do not use any ES6 methods

b) Use a suitable ES6 method

Example:
`motto("Tyrell") // returns "Growing strong"`

---

## Task 4

Create a function which takes an array and returns an array with all duplicates
removed.

---

## Task 5

Create a function wordSearch(w) that searches to see whether a word w is present in
the given text variable. Please note it has to be a full word and case insensitive.

---

## Task 6

Write a function which takes a number x and returns a function, which takes another
number y and returns the sum of numbers x and y

---

## Task 7

Write a function sevenAte9 that removes each 9 that it is in between 7s.

```js
sevenAte9("79712312"); // returns '7712312'
sevenAte9("79797"); // returns '777'
```

---

## Task 8

Create a simple function wrapper that will log every call to the wrapped function.

Example:

```js
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 }
```

---

## Task 9

Given an array with nested arrays of numbers (ex.: `[10, 6, [4, 8], 3, [6, 5, [9]]]`) create a function that would sum all numbers from provided array.

---

## Task 10

Create two versions of a calculator module:

a) Do not use any ES6 functionality

b) Use a ES6 class

Calculator should have four methods: add, subtract, multiply and divide.
All of
calculator methods should be chainable.

Example:

```js
var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10
```

---

## Task 11

Write the definition of the function "say" in such way that calling this:

```js
say("Hello,")("it’s me"); //Would return "Hello, it’s me";
```
