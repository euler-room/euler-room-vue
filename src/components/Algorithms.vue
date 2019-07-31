/* eslint-disable no-console */
<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Algorithms</h2>
        <v-layout justify-center>
          <v-expansion-panel dark>
            <v-expansion-panel-content
              v-for="(problem, i) in problems"
              :key="i"
            >
              <template v-slot:header >
                <h3>{{problem.attributes.title}}</h3>
              </template>
              <v-card>
                <v-card-text>
                  <tt application v-html="problem.attributes.description"></tt>
                  <br/>
                  <v-btn
                    light
                    v-on:click="currentPage = 'About'"
                  >
                    <span>Solution</span>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Algorithms',
  components: {
  },
  data: () => ({
    problems: [],
  }),
  created() {
    this.fetchProblems();
  },
  methods: {
    async fetchProblems() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/problems',
      })
        .then((response) => {
          console.log(response.data.data);
          this.problems = response.data.data;
        }, (error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>
