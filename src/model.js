'use strict';

const beerProto = {};

function beer (options = {}) {
  let {name, style, price, rate} = options;

  return Object.assign(Object.create(beerProto), {
    getName () {
      return name;
    },
    setName (value) {
      name = value;
    },
    getStyle () {
      return style;
    },
    setStyle (value) {
      style = value;
    },
    getPrice () {
      return price;
    },
    setPrice (value) {
      price = value;
    },
    getRate () {
      return rate;
    },
    setRate (value) {
      rate = value;
    },
  });
}

export {beer};