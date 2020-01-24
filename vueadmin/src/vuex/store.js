import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import users from './modules/users'
import posts from './modules/posts'

Vue.use(Vuex);

const state = {
  globalError: ""
};

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    users,
    posts
  }
});
