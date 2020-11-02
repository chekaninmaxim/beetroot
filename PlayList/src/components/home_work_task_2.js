function ShopProduct(title, price) {
	this.title = title;
	this.price = price;
}

ShopProduct.prototype.getTitle = function() {
	return this.title;
}

ShopProduct.prototype.setTitle = function(title) {
	this.title = title;
	return this.title;
}

ShopProduct.prototype.getPrice = function() {
	return this.price;
}

ShopProduct.prototype.setPrice = function(price) {
	this.price = price;
	return this.price;
}

ShopProduct.prototype.getInfo = function() {
	return `${this.title} - ${this.price}`;
}

function CDProduct(playLength, title, price) {
	this.playLength = playLength;
	ShopProduct.call(this, title, price)
}

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function() {
	return this.playLength;
}


function BookProduct(numPages, title, price) {
	this.numPages = numPages;
	ShopProduct.call(this, title, ptice);
}

BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.numPages = function() {
	return this.numPages;
}