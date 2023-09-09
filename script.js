//your code here
let itemColumn = document.getElementById("item")
let priceColumn = document.getElementById("price")

const form = document.getElementById("form");
let priceValidation = Number(0);

let total = document.getElementById("total");

let itemQty =document.getElementById("item-qty-input");

let num = Number(0);

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let inputValue = document.getElementById("item-name-input").value;
	let priceValue = document.getElementById("item-price-input").value;
	num = Number(num+1);
	priceValidation+=Number(priceValue);
	
	let sl = document.createElement("div");
	sl.innerText = num;
	itemQty.appendChild(sl);
	
	let item = document.createElement("div");
	item.innerText = inputValue;
	itemColumn.appendChild(item);
	
	let price = document.createElement("div");
	price.innerText = priceValue;
	priceColumn.appendChild(price);
	
	total.innerText=`Total = ${priceValidation}`;
	form.reset();
});
