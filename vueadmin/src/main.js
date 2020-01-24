// =========================================================
// * Vue Material Dashboard - v1.3.2
// =========================================================
//

// * Copyright 2019 romanteamtim Tim (https://www.romanteam.com)
// * Licensed under MIT (https://github.com/romanteamtimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by romanteamtim Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./vuex/store";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


const { dispatch, getters } = store;

dispatch('users/setUsers');
dispatch('posts/setPosts');

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

router.beforeEach((to, from, next) => {
  var watch = setInterval(function() {
    var gotUsers = getters['users/gotUsers'];
    var gotPosts = getters['posts/gotPosts'];
    if (gotUsers && gotPosts) {
      clearInterval(watch);
      next();
    }
  }, 10);
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
