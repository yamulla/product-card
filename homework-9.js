import { postComments } from "./comments.js";

//Задание-1
const temps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const warm = temps.filter(function (item) {
  return item >= 5;
});
console.log(warm);
//Задание-2 //
const drinks = ["чай", "кофе", "вода", "сок"];
console.log(drinks.includes("кофе"));

// Задание-3


function reverseArray(arr) {
  const copy = [...arr];
  copy.reverse();
  return copy;
}

const reversedDrinks = reverseArray(drinks);
console.log(reversedDrinks);
console.log(drinks);


const reversedNumbers = reverseArray(warm);
console.log(reversedNumbers);
console.log(warm);

//задание-7
const comComments = postComments.filter(function (item) {
  return item.email.includes(".com");
});
console.log(comComments);


//задание-8

postComments.forEach(function (item) {
  item.postId = item.id <= 5 ? 2 : 1;
});
console.log(postComments);

//задание-9
const shortComments = postComments.map(function (item) {
  return { id: item.id, name: item.name };
});
console.log(shortComments);

//задание-10
postComments.forEach(function (item) {
  item.isInvalid = item.body.length > 180;
});
console.log(postComments);
