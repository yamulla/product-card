console.log("Скрипт успешно подключен");
//погда
function showTemperature(city, temperature){
    console.log(`Сейчас в ${city} температура -${temperature} градусов по Цельсию`)
}
showTemperature("Сабетте", 10);

// Переменная скорости света
const SPEED_OF_LIGHT = 299792458;

// Функция для проверки скорости
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(300000000); // Сверхсветовая скорость
checkSpeed(150000000); // Субсветовая скорость
checkSpeed(299792458); // Скорость света

// Пересенная товара
let productName = "Casio G-Shock";


// Переменная цены
let productPrice = 150;

// Функция бюджета
function buyProduct(budget) {
    // Проверка бюджета
    if (budget >= productPrice) {
        // Склеиваем строку
        console.log(productName + " приобретён. Спасибо за покупку!");
    } else {
        // Ессли не хватает денег вычитаем сколько
        let difference = productPrice - budget;
        // Вывод сообщения с суммой
        console.log("Вам не хватает " + difference + "$, пополните баланс");
    }
}
buyProduct(200);
buyProduct(50);

// Создаем 3 любые переменные на свое усмотрение
let currentTopic = "JavaScript";
let tasksCompleted = 7;
let isReadyForReview = true;

// Создаем 1 функцию с любым именем
function finishHomework() {
    console.log("Домашнее задание по " + currentTopic + " полностью выполнено!");
}

finishHomework();


// Задание 7
let myCar = "Lanos";
let buildYear = 2008;
let isReadyToDrive = true;

// Задание 6
function printCarDetails() {
    console.log("Автомобиль: " + myCar + ", год: " + buildYear);
}

printCarDetails();