<template>
  <div class="navbar">
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <a href="/"
          ><h1 class="font-weight-bold text-h2 basil--text">
            The Cocktail House
          </h1></a
        >

        <img src="../../public/cocktail.jpg" alt="" width="152px" />
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
        @change="$emit('display', tab)"
      >
        <v-tab v-for="item in items" :key="item">
          <h1>{{ item }}</h1>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Cocktails", "Cocktail Of The Day"],
    };
  },
};
</script>

<style>
.basil {
  background: rgb(241, 192, 206);
  background: linear-gradient(
    105deg,
    rgba(241, 192, 206, 0.9177871832326681) 24%,
    rgba(255, 255, 255, 1) 42%
  );
}
.basil--text {
  color: #356859 !important;
}
.navbar {
  margin-top: 32px;
}
h1 {
  color: grey;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 13px;
}

.img {
  border-radius: 12px;
}
a {
  text-decoration: none;
  color: red;
  background-size: cover;
}
</style>