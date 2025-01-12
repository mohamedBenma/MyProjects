<template>
  <v-footer
    color="
    rgb(60, 60, 60)
"
  >
    <v-card
      class="flex"
      color="
      rgb(60, 60, 60)
"
    >
      <v-card-title
        color="
        rgb(60, 60, 60)
"
      >
        <strong
          class="subheading"
          color="
rgb(60, 60, 60)
"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          v-bind:href="icon.url"
        >
          <v-icon size="24px">
            {{ icon.title }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <v-icon>mdi-access-point</v-icon><strong> The Cocktail House</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      {
        title: "mdi-gitlab",
        url: "https://gitlab.com/MohamedBenma/testtechniquevade",
      },
      {
        title: "mdi-linkedin",
        url: "https://www.linkedin.com/in/mohamed-benmaouche-900b17225/",
      },
    ],
  }),
};
</script>
