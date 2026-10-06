
// Задание 3. Объект с данными о человеке
const person = {
  firstName: "  Ильнур",
  lastName: "Муллаянов",
  email: "ilnurguraba1441@gmail.com",
  job: "Frontend-разработчик",
  position: "Middle",
  age: 30,
  country: "Россия",
  city: "Октябрьский",
};

// Задание 4. Объект с данными об автомобиле
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2005,
  color: "Чёрный",
};

// Владелец добавлен отдельной строкой, а не при создании объекта
car.owner = person;

// Задание 5. Функция добавляет "максимальную скорость", если её ещё нет
function setMaxSpeed(carObj) {
  if (!("maxSpeed" in carObj)) {
    carObj.maxSpeed = 200;
    return;
  }
}

setMaxSpeed(car);
setMaxSpeed(car);

// Задание 6. Функция выводит значение указанного свойства объекта
function printProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

printProperty(car, "brand");
printProperty(person, "city");

// Задание 7. Массив с названиями продуктов
const products = ["Ноутбук", "Смартфон", "Наушники", "Клавиатура", "Мышь"];

// Задание 8. Массив объектов-книг
const books = [
  { title: "Акыда аль-Васитыя", author: "Ибн Теймия", year: 1290, coverColor: "Зелёный", genre: "Вероучение (акыда)" },
  { title: "Сады праведных (Рияд ас-Салихин)", author: "Имам ан-Навави", year: 1275, coverColor: "Коричневый", genre: "Хадисы" },
  { title: "Сорок хадисов ан-Навави", author: "Имам ан-Навави", year: 1277, coverColor: "Бежевый", genre: "Хадисы" },
  { title: "Мир джиннов и дьяволов", author: "Умар Сулейман аль-Ашкар", year: 1998, coverColor: "Тёмно-синий", genre: "Вероучение (акыда)" },
];

// Добавляем ещё одну книгу в конец массива методом push
books.push({
  title: "Судный день. Знамения, признаки, приметы",
  author: "Умар Сулейман аль-Ашкар",
  year: 1999,
  coverColor: "Бордовый",
  genre: "Вероучение (акыда)",
});

// Задание 9. Массив книг вселенной "Гарри Поттер"
const harryPotterBooks = [
  { title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997, coverColor: "Жёлтый", genre: "Фэнтези" },
  { title: "Гарри Поттер и Тайная комната", author: "Дж. К. Роулинг", year: 1998, coverColor: "Зелёный", genre: "Фэнтези" },
  { title: "Гарри Поттер и узник Азкабана", author: "Дж. К. Роулинг", year: 1999, coverColor: "Розовый", genre: "Фэнтези" },
];

// Объединяем оба массива в один с помощью оператора расширения (spread)
const allBooks = [...books, ...harryPotterBooks];

// Задание 10. С помощью map добавляем каждой книге свойство isRare
// (isRare - книга считается редкой, если издана до 1950 года)
function markRareBooks(booksArr) {
  return booksArr.map((book) => ({
    ...book,
    isRare: book.year < 1950,
  }));
}

const booksWithRareMark = markRareBooks(allBooks);
console.log(booksWithRareMark);
