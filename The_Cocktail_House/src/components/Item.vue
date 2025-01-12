<template>
  <div class="box" height="120px">
    <v-card class="mx-auto" max-width="5044px" height="">
      <v-row justify="center">
        <!-- <button @click="overlay = !overlay">
          <span class="material-icons-outlined">i</span>
        </button> -->
        <v-overlay :absolute="absolute" :value="overlay">
          <v-card @click="overlay = false">
            <div class="overlayBox">
              <h2>How To Serve It !</h2>
              <p>''{{ item.strInstructions }}''</p>
            </div>
          </v-card>
        </v-overlay>
      </v-row>
      <v-img
        v-bind:src="item.strDrinkThumb"
        alt=""
        height="280px"
        @click="overlay = !overlay"
        ><i class="fa-sharp fa-solid fa-circle-info" width="28px"></i
      ></v-img>

      <v-card-title>
        <h1>{{ item.strDrink }}</h1></v-card-title
      >
      <v-chip class="v-chip">
        <v-icon left> mdi-label </v-icon>
        {{ item.strAlcoholic }}
      </v-chip>
      <v-chip class="v-chip" v-if="item.strCategory != 'Other/Unknown'">
        <v-icon left> mdi-label </v-icon>
        {{ item.strCategory }}
      </v-chip>
      <v-card-subtitle>
        <v-rating
          v-model="rating"
          background-color="purple lighten-3"
          color="red"
          meduim
        >
        </v-rating
      ></v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Ingredients </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="getIngredients">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <div
            v-for="ingredient in ingredientsFilter"
            :key="ingredient.id"
            class="ingredient"
          >
            <v-list-item class="item">
              <v-list-item-content class="boxIngr">
                <img class="img" v-bind:src="ingredient.url" />
                <div class="imgNdicon">
                  <i class="fa-solid fa-circle"></i>

                  <v-list-item-title class="titleIngr">
                    {{ ingredient.title }}</v-list-item-title
                  >
                </div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      show: false,
      absolute: true,
      overlay: false,
      ingredients: [],
      rating: 4,
      ingredientsFilter: [],
    };
  },
  methods: {
    getIngredients() {
      this.init();
      var ingredientsKeys = [];
      ingredientsKeys = Object.keys(this.item).filter((key) =>
        key.includes("strIngredient")
      );
      for (var i = 0; i < ingredientsKeys.length; i++) {
        this.ingredients.push({
          title: this.item[ingredientsKeys[i]],
          url: this.getIngredientUrl(this.item[ingredientsKeys[i]]),
        });
      }
      this.ingredientsFilter = this.ingredients.filter(
        (item) => item.title != null
      );
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
  },
};
</script>

<style>
.box {
  padding-left: 70px;
}
h1 {
  font-size: 18px;
  font-family: cursive;
  color: rgb(226, 141, 80);
  margin-bottom: 10px;
  padding-left: 6px;
}

.overlayBox {
  background-color: transparent;
  font-family: cursive;
  background-color: rgb(105, 44, 22);
  margin-bottom: 60px;
}
.overlayBox h2 {
  padding-left: 10%;
  font-size: 20px;
  color: white;
}
.overlayBox p {
  padding-left: 5px;
  font-size: 20px;
  color: aliceblue;
}
.ingredient {
  padding-top: 6px;
}
.boxIngr img {
  height: 80px;
  margin-bottom: 90px;
  width: 100px;
  margin-right: 14px;
}
.titleIngr {
  margin-left: 5px;
  color: white;
  font-family: cursive;
  font-size: 14px;
}
.boxIngr {
  display: -webkit-inline-box;
  margin-right: 22px;
  padding: 4px 5px;
}
.item {
  padding: 0px;
}
.imgNdicon {
  display: inherit;
  margin-top: 15%;
}
.v-chip {
  margin-left: 5px;
  font-family: cursive;
}
</style>