'use strict';

import {beer} from './model';

const api = {
  getBeers: getBeers
};

function getBeers() {
  return fetch("data/beers.json")
  .then(response => response.json())
  .then(beersData => beersData.map(beerData => beer(beerData)));
}

export default api;