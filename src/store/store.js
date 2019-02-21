import Vue from 'vue';
import Vuex from 'vuex';

import ratings from './modules/ratings/rating';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  modules: {
    ratings,
  }
});

export default vuex;