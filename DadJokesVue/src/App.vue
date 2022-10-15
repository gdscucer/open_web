<template>
  <div class="bg-slate-100">
    <NavBar />
    <main class='h-[calc(100vh-48px-56px)] flex flex-col items-center justify-center px-4 lg:px-0 '>
      <div class='container'>
        <JokesList />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script >
import NavBar from "./components/NavBar.vue"
import AppFooter from "./components/Footer.vue"
import JokesList from "./components/JokesList.vue"
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { NavBar, AppFooter, JokesList },
  methods: {
    ...mapActions("jokes", ["getJoke"])
  },
  created() {
    this.getJoke()
  }
}

</script>