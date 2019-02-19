<template>
  <v-footer
    height="auto"
    color="grey darken-3"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        grey
        darken-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>Sébastien VÉDRINE</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
      ]
    })
  }
</script>
