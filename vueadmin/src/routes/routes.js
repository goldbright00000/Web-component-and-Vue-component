import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";

import Users from "@/pages/Users.vue";
import Posts from "@/pages/Posts.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/users",
    children: [
      {
        path: "users",
        name: "Users",
        component: Users
      },
      {
        path: "posts",
        name: "Posts",
        component: Posts
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      }
    ]
  }
];

export default routes;
