// Находим заголовок
const catalogTitle = document.querySelector('.catalog-title');

// Наведение мыши
catalogTitle.addEventListener('mouseenter', () => {
    // Вывод текста в консоль
    console.log(catalogTitle.textContent);
});

const mainTitle = '.product-card__image-box'; // camelCase
const MAINTITLE = '.product-card__image-box'; // upperCase
const main_title = '.product-card__image-box'; // snake_case

// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card__image-box');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#000077';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card__image-box');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}
// Находим кнопку по ID
const toggleButton = document.getElementById('toggle-btn');

// Вешаем слушатель клиика
toggleButton.addEventListener('click', () => {

    // если класса 'second-color-active' нет он его добавляет,если класс уже есть он его убирает.
    toggleButton.classList.toggle('second-color-active');
});