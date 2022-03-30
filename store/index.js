import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First post",
                previewText: "This is first post",
                thumbnail:
                  "https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg",
              },
              {
                id: "2",
                title: "Second post",
                previewText: "This is Second post",
                thumbnail:
                  "https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg",
              },
            ]);
            resolve();
          }, 1500);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
