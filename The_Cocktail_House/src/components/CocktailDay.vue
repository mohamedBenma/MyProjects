<template>
  <div class="cDay">
    <div class="box">
      <div class="leftBox">
        <h1>
          {{ items[0].strDrink }}
          <h2>({{ items[0].strAlcoholic }} , {{ items[0].strCategory }})</h2>
        </h1>
        <img v-bind:src="items[0].strDrinkThumb" width="520px" height="520px" />
      </div>
      <div class="cInfos">
        <h1>Ingredients:</h1>
        <div class="boxIngrd">
          <div
            v-for="ingredient in ingredientsFilter"
            :key="ingredient.id"
            class="ingredient"
          >
            <img
              v-bind:src="ingredient.url"
              alt=""
              height="150px"
              width="150px"
            />
            <h2>{{ ingredient.title }}</h2>
          </div>
        </div>

        <h1>Instructions:</h1>
        <p>{{ items[0].strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      ingredients: [],
      ingredientsFilter: [],
      show: false,
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => this.try(response.data.drinks[0]));
    },
    getIngredients() {
      console.log(this.items[0]);
      this.init();
      var ingredientsKeys = [];
      ingredientsKeys = Object.keys(this.items[0]).filter((key) =>
        key.includes("strIngredient")
      );
      for (var i = 0; i < ingredientsKeys.length; i++) {
        this.ingredients.push({
          title: this.items[0][ingredientsKeys[i]],
          url: this.getIngredientUrl(this.items[0][ingredientsKeys[i]]),
        });
      }
      this.ingredientsFilter = this.ingredients.filter(
        (item) => item.title != null
      );
      console.log(this.ingredientsFilter);
    },
    init() {
      this.ingredients = [];
      this.ingredientsFilter = [];
      this.show = !this.show;
    },
    getIngredientUrl(ingredientTitle) {
      return (
        "https://www.thecocktaildb.com/images/ingredients/" +
        ingredientTitle +
        ".png"
      );
    },
    try(data) {
      this.items.push(data);
      this.getIngredients();
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
}
h1 {
  font-family: cursive;
  font-size: 40px;
  color: black;
}
h2 {
  font-size: 25px;
  color: black;
  font-family: cursive;
}
.ingredient {
  align-items: start;
  justify-content: space-between;
  border: solid 0.5px;
  border-radius: 12px;
  width: auto;
  background-color: #d7a9a9;
  margin: 13px;
  border: none;
  text-align: center;
}
.boxIngrd {
  display: grid;
  grid-template-columns: 205px 205px 205px 205px;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 50px;
}
.cInfos {
  margin: 12px;
}
.leftBox {
  margin: 17px;
  text-align: center;
}
.leftBox img:hover {
  transform: rotateY(180deg);
}
p {
  color: black;
  text-align: center;
  font-size: 28px;
  font-family: cursive;
  border: double;
  border-radius: 7px;
}
</style>