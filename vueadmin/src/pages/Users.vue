<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Users</h4>
            <p class="category">users list here</p>
          </md-card-header>
          <md-card-content>
            <UsersSimpleTable table-header-color="green"></UsersSimpleTable>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { UsersSimpleTable } from "@/components";
import { UserCard } from "@/pages";
export default {
  mounted() {
    var { dispatch } = this.$store;
    dispatch("users/setUsers", null);
  },
  components: {
    UserCard,
    UsersSimpleTable
  }
};
</script>
