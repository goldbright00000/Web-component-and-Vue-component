<template>
  <md-card class="md-card-profile">
    <md-card-content>
      <h6 class="category text-gray">id : {{post.id}}</h6>
      <h6 class="category text-gray">userId : {{post.userId}}</h6>
      <h4 class="card-title">title : {{post.title}}</h4>
      <p class="card-description">body : {{post.body}}</p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "post-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  computed:{
    ...mapGetters({
      post: "posts/selectedPost"
    })
  },
  data() {
    return {};
  }
};
</script>
<style></style>
