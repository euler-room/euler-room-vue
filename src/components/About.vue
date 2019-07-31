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

      <v-flex
        mb-5
        xs12
      >
        <h2 class=" headline font-weight-bold">About Me</h2>
        <v-flex >
          <p>
            Experienced Software Engineer with a demonstrated history of working
            in the Web Development industry. Skilled in Computer Science, Test
            Automation, Databases, and Ruby/Ruby on Rails. Strong engineering
            professional with a Bachelor of Science (BS) focused in Computer
            Science from Eastern Washington University.
          </p>
        </v-flex>
        <v-flex >
        <h2 class=" headline font-weight-bold">About This App</h2>
          <p>
            (Work in progress) - Ruby on Rails API hosted on Heroku. Postgres
            DB hosted on Heroku. VueJS frontend hosted on Heroku.
          </p>
        </v-flex>
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
