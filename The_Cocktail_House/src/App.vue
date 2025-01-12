<template>
  <v-app>
    <div id="app">
      <nav-bar @display="(tab) => display(tab)"></nav-bar>
      <div></div>
      <Cocktails v-if="index == 0"></Cocktails>
      <CocktailDay v-else></CocktailDay>
      <Footer></Footer>
    </div>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import Cocktails from "./components/Cocktails";
import Footer from "./components/Footer";
import CocktailDay from "./components/CocktailDay";
export default {
  name: "App",
  components: { NavBar, Cocktails, Footer, CocktailDay },
  data() {
    return {
      items: [],
      index: null,
    };
  },
  methods: {
    display(tab) {
      this.index = tab;
    },
  },
};
</script>
<style>
#app {
  /*  background: rgb(223, 106, 139);
  background: radial-gradient(
    circle,
    rgba(223, 106, 139, 1) 13%,
    rgba(239, 240, 237, 1) 82%
  ); */
  background: rgb(217, 145, 165);
  background: linear-gradient(
    105deg,
    rgba(217, 145, 165, 1) 4%,
    rgba(255, 255, 255, 1) 65%
  );
}
</style>
