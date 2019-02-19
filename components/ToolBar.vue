<template>
  <v-toolbar dark color="teal lighten-1">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/">To do App</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" flat>
        <v-icon>home</v-icon>&nbsp; Home
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

</script>

<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited {
  color: white;
}
</style>
