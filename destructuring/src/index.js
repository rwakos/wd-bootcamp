// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import practice from "./practice";
// import animals, {useAnimals} from "./data";

// const [cat, dog] = animals;

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// console.log(useAnimals(cat));
// const {name: dogName = "Dexter", sound: dogSound = "bark", feedingRequirements: {food, water} } = cat;

// console.log("dog", dogName, dogSound, food, water);

const [honda, tesla] = practice;
const {speedStats: { topSpeed: teslaTopSpeed} } = tesla;
const {speedStats: { topSpeed: hondaTopSpeed} } = honda;

const { coloursByPopularity: [teslaTopColour]} = tesla;
const { coloursByPopularity: [hondaTopColour]} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
