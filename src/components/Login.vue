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
        <h2 class=" headline font-weight-bold">Resume</h2>
        <v-flex >
          <p>
            This page is under construction. When complete, it will return a JSON Web Token from a Rails API which will then be used to authenticate the user for subsequent requests.
          </p>
        </v-flex>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>

<style>

</style>
