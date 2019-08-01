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
                <h2>{{problem.attributes.title}}</h2>
              </template>
              <v-card>
                <v-card-text>
                  <tt application v-html="problem.attributes.description"></tt>
                  <br/>
                  <v-expand-transition>
                    <div v-show="solutionIsVisible(problem.id)">
                      <hr/>
                      <br/>
                      <h3>&nbsp;&nbsp;Solution</h3>
                      <br/><br/>
                      <tt
                        application
                        v-html="problem.attributes.solution_text"
                      >
                      </tt>
                      <h3>&nbsp;&nbsp;Result: {{ problem.attributes.solution }}</h3>
                    </div>
                  </v-expand-transition>
                  <v-btn
                    v-show="!solutionIsVisible(problem.id)"
                    light
                    v-on:click="setSolutionVisibility(problem.id)"
                  >
                    <span>Show Solution</span>
                  </v-btn>
                  <v-btn
                    v-show="solutionIsVisible(problem.id)"
                    light
                    v-on:click="setSolutionVisibility('none')"
                  >
                    <span>Hide Solution</span>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-layout>
        <br/><h4 class="headline  mb-1">...more to come...</h4>
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
    currentSolution: '',
  }),
  created() {
    this.fetchProblems();
  },
  methods: {
    solutionIsVisible(problemId) {
      return this.currentSolution === `solution-${problemId}`;
    },
    setSolutionVisibility(problemId) {
      this.currentSolution = `solution-${problemId}`;
    },
    async fetchProblems() {
      axios({
        method: 'get',
        url: '/problems',
      })
        .then((response) => {
          // console.log(process.env);
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
