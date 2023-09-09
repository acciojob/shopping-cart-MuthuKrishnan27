//your code here
let itemColumn = document.getElementById("item")
let priceColumn = document.getElementById("price")

const form = document.getElementById("form");
let priceValidation = Number(0);

let total = document.getElementById("total");



form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let inputValue = document.getElementById("item-name-input").value;
	let priceValue = document.getElementById("item-price-input").value;
	priceValidation+=Number(priceValue);
	let item = document.createElement("div");
	item.innerText = inputValue;
	itemColumn.appendChild(item);
	let price = document.createElement("div");
	price.innerText = priceValue;
	priceColumn.appendChild(price);
	total.innerText=`Total = ${priceValidation}`;
	form.reset();
});
