//your code here
let itemColumn = document.getElementById("item")
let priceColumn = document.getElementById("price")

const form = document.getElementById("form");
let priceValidation = Number(0);

let total = document.getElementById("total");

let itemQty =document.getElementById("item-qty");

let num = Number(0);

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let inputValue = document.getElementById("item-name-input").value;
	let priceValue = document.getElementById("item-price-input").value;
	let qtyValue = document.getElementById("item-qty-input").value;
	
	priceValidation+=Number(priceValue * qtyValue);
	
	let qty = document.createElement("div");
	qty.innerText = qtyValue;
	itemQty.appendChild(qty);
	
	let item = document.createElement("div");
	item.innerText = inputValue;
	itemColumn.appendChild(item);
	
	let price = document.createElement("div");
	price.innerText = priceValue;
	priceColumn.appendChild(price);
	
	total.innerText=`Total = ${priceValidation}`;
	form.reset();
});
