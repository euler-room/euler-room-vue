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
        v-if="isLoggedIn"
      >
        <h2 class=" headline font-weight-bold">A Cover Letter for {{ currentUser.username }}</h2>
        <embed
          :src="`${currentUser.cover_letter_url}#toolbar=0&navpanes=0&scrollbar=0`"
          type="application/pdf"
          style="border: none;"
          :width="`${coverLetterWidth}`"
          :height="`${coverLetterHeight}`" />
      </v-flex>
      <v-flex
        mb-5
        xs12
        v-if="!isLoggedIn"
      >
        <v-flex >
          <p>
            You must be logged in to view your cover letter.
          </p>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    coverLetterUrl: '',
    coverLetterDimensions: {
      portrait: { width: '852', height: '1050' },
      landscape: { width: '852', height: '640' },
    },
  }),
  computed: {
    ...mapGetters([
      'currentUser',
      'isLoggedIn',
    ]),
    coverLetterHeight() {
      return this.coverLetterDimensions[this.currentUser.cover_letter_orientation].height;
    },
    coverLetterWidth() {
      return this.coverLetterDimensions[this.currentUser.cover_letter_orientation].width;
    },
  },
};
</script>

<style>

</style>
