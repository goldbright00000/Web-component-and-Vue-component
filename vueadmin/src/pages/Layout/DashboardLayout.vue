<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <static-header></static-header>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/users">
        <md-icon>person</md-icon>
        <p>Users</p>
      </sidebar-link>
      <sidebar-link to="/posts">
        <md-icon>content_paste</md-icon>
        <p>Posts</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <!-- <top-navbar></top-navbar> -->

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import { StaticHeader } from "@/components";
export default {
  components: {
    // TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    StaticHeader
  }
};
</script>
