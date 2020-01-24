<template>
  <div>
    <mdb-datatable
      :data="{ ...data, rows: users }"
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
  components: {
    mdbDatatable
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters({
      users: "users/users"
    })
  },
  methods: {
    onSelect: function(item) {
      var { dispatch } = this.$store;
      dispatch("users/setSelectedUser", { item: this.users[item] });
    },
    onPagination(pagination) {
      console.log("pagination", pagination);
      if (pagination) {
        this.limit = pagination.size;
        this.offset = (pagination.page - 1) * this.limit;
      }
    }
  },
  data() {
    return {
      selected: [],
      data: {
        columns: [
          {
            label: 'UserID',
            field: 'id',
            sort: 'asc'
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc'
          }
        ]
      }
    };
  }
};
</script>
