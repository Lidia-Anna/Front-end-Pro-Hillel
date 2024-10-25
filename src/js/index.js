'use strict';

(function () {
  const product = {
    get ourName() {
      return this.name;
    },
    set ourName(value) {
      if (typeof value === 'string' && (value.trim()).length > 0) {
        this.name = value.trim();
      } else throw new Error('Name is not a string or an empty string.');
    },
    get ourPrice() {
      return this.price;
    },
    set ourPrice(value) {
      if (typeof value === 'number' && value > 0) {
        this.price = value;
      } else throw new Error('Price is not a number or <= 0');
    },
    get ourQuantity() {
      return this.price * this.quantity;
    },
  };
  Object.defineProperties(product, {
    name: {
      value: 'fish',
      writable: true,
    },
    price: {
      value: 10,
      writable: true,
    },
    quantity: {
      value: 5,
    },
  });
  console.log(product.ourPrice);
  product.ourPrice = 4;
  console.log(product.ourPrice);
  console.log(product.ourQuantity);
}());
