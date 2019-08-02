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
          <embed src="https://euler-room.s3.us-east-2.amazonaws.com/pdfs/GJB-reume-20190802.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" style="border: none;" width="720" height="960" />
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
