export const jokesModule = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  mutations: {
    setJoke: (state, payload) => {
      state.items = [payload, ...state.items];
    },
  },
  actions: {
    getJoke({ commit }) {
      fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
        .then((response) => response.json())
        .then((joke) => {
          commit("setJoke", joke);
        })
        .catch((error) => {
          console.log("Something went wrong");
          console.log(error);
        });
    },
  },
  getters: {
    items: (state) => state.items,
    item: (state) => state.items[0],
  },
};
