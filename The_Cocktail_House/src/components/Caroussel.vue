<template>
  <div class="caroussel">
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        v-bind:src="item.src"
      >
        <div class="overlay"></div>
        <v-row class="fill-height" align="center" justify="center"> </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "./couverture_cocktails.jpg",
        },
        {
          src: "./cocktail6.jpg",
        },
        {
          src: "./cocktail7.jpg",
        },
        {
          src: "./cocktail5.jpg",
        },
      ],
    };
  },
};
</script>
<style>
.caroussel {
  margin: auto;
  border-radius: 103px;
  opacity: 0.8;
  border-bottom: 30px;
  background-position: center;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
</style>