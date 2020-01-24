<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Posts</h4>
            <p class="category">post list here</p>
          </md-card-header>
          <md-card-content>
            <PostsSimpleTable table-header-color="green"></PostsSimpleTable>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <PostCard> </PostCard>
      </div>
    </div>
  </div>
</template>

<script>
import { PostsSimpleTable } from "@/components";
import { PostCard } from "@/pages";
export default {
  mounted() {
    var { dispatch } = this.$store;
    dispatch("posts/setPosts", null);
  },
  components: {
    PostCard,
    PostsSimpleTable
  }
};
</script>
