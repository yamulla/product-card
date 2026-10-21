import { cards } from "./products.js";
const template = document.getElementById('product-card-template');
const productList = document.querySelector('.product-grid');
function renderCards(cardsToRender) {

cardsToRender.forEach(card => {
    const cardClone = template.content.cloneNode(true);
    cardClone.querySelector('.product-card__category').textContent = card.category;
    cardClone.querySelector('.product-card__name').textContent = card.name;
    cardClone.querySelector('.product-card__description').textContent = card.description;
    cardClone.querySelector('.product-card__price-value').textContent = card.price;
    cardClone.querySelector('.product-card__image').src = card.photoPath;
    cardClone.querySelector('.product-card__image').alt = card.name;
    const ingredientsList = cardClone.querySelector('.product-card__ingredients-list');
    card.ingredients.forEach(ingredient => {

        const li = document.createElement('li');
        li.className = 'product-card__ingredients-item';
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
});

    productList.appendChild(cardClone);
    console.log(cards);


});
}

const nameToDescription = cards.reduce((acc, card) => {
    acc.push({ [card.name]: card.description })
    return acc;

}, []);

console.log(nameToDescription);
const count = getCardsCount();
renderCards(cards.slice(0, count));


function getCardsCount() {
    const answer = prompt("Сколько карточек отобразить? От 1 до 5")
    const count = Number(answer);
    if (count >= 1 && count <= 5) {
    return count;
}
else {
    alert("Нужно ввести число от 1 до 5!");
    return getCardsCount();
}

}