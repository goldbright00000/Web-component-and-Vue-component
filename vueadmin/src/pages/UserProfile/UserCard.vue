<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">id : {{user.id}}</h6>
      <h4 class="card-title">name : {{user.name}}</h4>
      <h4 class="card-title">username : {{user.username}}</h4>
      <h6 class="card-title">email : {{user.email}}</h6>
      <h6 class="card-title">address : {{user.address && user.address.street}}, {{user.address && user.address.suite}}, {{user.address && user.address.city}} {{user.address && user.address.zipcode}} </h6>
      <h6 class="card-title">phone : {{user.phone}}</h6>
      <h6 class="card-title">website : {{user.website}}</h6>
      <h6 class="card-title">company name : {{user.company && user.company.name}}</h6>
      <h6 class="card-title">company catchPhrase : {{user.company && user.company.catchPhrase}}</h6>
      <h6 class="card-title">company bs : {{user.company && user.company.bs}}</h6>    
      <p class="card-description"></p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  computed:{
    ...mapGetters({
      user: "users/selectedUser"
    })
  },
  data() {
    return {};
  }
};
</script>
<style></style>
