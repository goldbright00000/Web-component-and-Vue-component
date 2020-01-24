<template>
  <div>   
        <mdb-datatable
        :data="data"
        striped
        bordered
        materialInputs
        responsive
        focus
        @selectRow="onSelect"
      />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mdbDatatable } from "mdbvue";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  components: {
    mdbDatatable
  },
  computed: {
    ...mapGetters({
      posts: "posts/posts"
    })
  },
  created() {
    this.data.rows = this.posts;
  },
  methods: {
    onSelect: function(item) {
      var { dispatch } = this.$store;
      dispatch("posts/setSelectedPost", { item: this.posts[item] });
    }
  },
  data() {
    return {
      selected: [],

      data: {
          columns: [
            {
              label: 'PostID',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Title',
              field: 'title',
              sort: 'asc'
            }           
          ]
      }
    };
  }
};
</script>
