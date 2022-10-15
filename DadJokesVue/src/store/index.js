import { createStore } from "vuex";
import { jokesModule } from "./joke";

export default createStore({
  modules: {
    jokes: jokesModule,
  },
});
