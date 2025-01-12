<template>
  <div>
    <Caroussel></Caroussel>
    <div class="titleCocktails"><h1>Vos Cocktails du Jour</h1></div>
    <div class="items">
      <ul>
        <Item
          v-bind:item="item"
          v-for="item in items"
          :key="item.id"
          @autorise="autorise"
        ></Item>
      </ul>
    </div>
  </div>
</template>
  <script>
import Item from "./Item";
import Footer from "./Footer";
import axios from "axios";
import Caroussel from "./Caroussel";
export default {
  name: "Cocktails",
  components: { Item, Footer, Caroussel },
  data() {
    return {
      items: [],
      autorised: false,
    };
  },
  methods: {
    verifyLastItem(data) {
      console.log(this.items.includes(data));
      if (this.items.includes(data)) {
        this.getRandomCocktail();
      } else {
        this.items.push(data);
      }
    },
    getRandomCocktail() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => this.verifyLastItem(response.data.drinks[0]));
    },
  },

  mounted() {
    for (var i = 0; i < 3; i++) {
      this.getRandomCocktail();
    }
  },
};
</script>
  <style>
ul {
  list-style: none;
  margin-left: 8%;
  padding: 0;
  display: grid;
  grid-template-columns: 395px 395px 395px;
  align-items: start;
  justify-content: space-between;
}
.titleCocktails h1 {
  color: #aa7f81;
  font-family: cursive;
  font-size: 85px;
}
.titleCocktails {
  margin-top: 70px;
  margin-left: 28%;
  border-radius: 13px;
}
.items {
  display: flex;
  margin-right: 5%;
  margin-bottom: 230px;
  margin-top: 80px;
}
</style>
  