'use strict';

const view = {
  renderBeerList: renderBeerList
};

function renderBeerList (beers) {
  const beerListHtml = `<ul>${beers.map(generateBeerItem).join('')}</ul>`;
  document.getElementById('app').innerHTML = beerListHtml;
}

function generateBeerItem (beer) {
  return `<li>
    ${beer.getName()} ${beer.getStyle()} ${beer.getRate()} ${beer.getPrice()}
  </li>`;
}

export default view;