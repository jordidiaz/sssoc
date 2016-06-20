'use strict';

import api from './api';
import view from './view';

document.addEventListener('DOMContentLoaded', function () {
  api.getBeers().then(view.renderBeerList);
});