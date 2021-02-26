let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100, 1000]
	},
	{
		type: 'laptop',
		price: [50, 1500]
	},
	{
		type: 'smartphone',
		price: [80, 2000]
	},
	{
		type: 'tablet',
		price: [20, 1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

class Products {
	renderCard() {

		this.price = (Array.isArray(this.price)) ? this.price.join('-') : this.price

		return `<div>
		<div><img src="./img/${this.category}/${this.type}.svg" width=25></div>
		<p><span>Name: </span>${this.type}</p>
		<p><span>Price: </span>${this.price}</p>
					</div>`;
	}
}

class CategoryProducts extends Products {
	constructor(category) {
		super()
		this.category = category;
	}
}

let Kitchen = new CategoryProducts("kitchen");
let Devices = new CategoryProducts("devices");
let Cosmetics = new CategoryProducts("cosmetics");

//console.log(Kitchen);
//console.log(Devices);
//console.log(Cosmetics);

function rebuildArray(arr, objCr) {
	return arr.map(function (elem) {
		let newObj = Object.create(objCr);
		for (let item in elem) {
			if (Array.isArray(elem[item])) {
				newObj[item] = elem[item];
			} else {
				newObj[item] = elem[item];
			}
		}
		return newObj;
	});
}

let kitchenProducts_rebuild = rebuildArray(kitchenProducts, Kitchen);
let devicesProducts_rebuild = rebuildArray(devicesProducts, Devices);
let cosmeticsProducts_rebuild = rebuildArray(cosmeticsProducts, Cosmetics);

//console.log(kitchenProducts_rebuild);
//console.log(devicesProducts_rebuild);
//console.log(cosmeticsProducts_rebuild);

function drawCards(arr) {
	let arrRender = arr.map(function (elem) {
		return elem.renderCard();
	});
	document.write(`<section>
						<h2>Category: ${arr[0].category}</h2>
						<div class="join">
						${arrRender.join('')}
						</div></section>`
	);
}

document.write(`<div class="container">`)
drawCards(kitchenProducts_rebuild);
drawCards(devicesProducts_rebuild);
drawCards(cosmeticsProducts_rebuild);
document.write(`</div>`);

//******************************************************


//function Products() { }
//Products.prototype.render = function () {
//	return `<div>
//<div><img src="./img/${this.category}/${this.type}.svg" width=25></div>
//<p><span>Name: </span>${this.type}</p>
//<p><span>Price: </span>${this.price}</p>
//            </div>`;
//}

//function ProductsCategory(category) {
//	this.category = category;
//}
//ProductsCategory.prototype = Object.create(Products.prototype);

//let Kitchen = new ProductsCategory("kitchen");
//let Devices = new ProductsCategory("devices");
//let Cosmetics = new ProductsCategory("cosmetics");

//function rebuildArr(arr, objCat) {
//	return arr.map(function (elem) {
//		let newObj = Object.create(objCat);
//		for (let item in elem) {
//			if (Array.isArray(elem[item])) {
//				newObj[item] = elem[item].join('-');
//			} else {
//				newObj[item] = elem[item];
//			}
//		}
//		return newObj;
//	});
//}

//let kitchenProducts_rebuild = rebuildArr(kitchenProducts, Kitchen);
//let devicesProducts_rebuild = rebuildArr(devicesProducts, Devices);
//let cosmeticsProducts_rebuild = rebuildArr(cosmeticsProducts, Cosmetics);

//console.log(devicesProducts_rebuild);

//function drawCards(arr) {
//	let arrRenderNew = arr.map(function (elem) {
//		return elem.render();
//	});
//	document.write(`<section>
//						<h2>Category: ${arr[0].category}</h2>
//						<div class="join">
//						${arrRenderNew.join('')}
//						</div></section>`
//	);
//}

//document.write(`<div class="container">`)
//drawCards(kitchenProducts_rebuild);
//drawCards(devicesProducts_rebuild);
//drawCards(cosmeticsProducts_rebuild);
//document.write(`</div>`);


