import * as api from "@/api";
const state = {
  posts: [],
  gotPosts: false,
  selectedPost: {}
};
// getters
const getters = {
  posts: state => state.posts,
  selectedPost: state => state.selectedPost,
  gotPosts: state => state.gotPosts
};
// mutations
const mutations = {
  setPosts: async (state, payload) => {
    var postData = await api.getPosts();
    state.posts = postData.data;
    state.selectedPost = state.posts[0];
    state.gotPosts = true;
  },
  setSelectedPost: (state, payload) => {
    state.selectedPost = payload.item;
  }
};
// actions
const actions = {
  setPosts: (context, payload) => {
    context.commit("setPosts", payload);
  },
  setSelectedPost: (context, payload) => {
    context.commit("setSelectedPost", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
