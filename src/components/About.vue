<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/er-banner.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>

      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">About Me</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in about"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    about: [
      {
        text: 'Github',
        href: 'https://github.com/TheCulprit',
      },
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/gregory-buchanan-7ba4431b',
      },

    ],
  }),
};
</script>

<style>

</style>
