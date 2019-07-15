<template>
  <v-card :color="color" class="white--text">
    <v-card-title primary-title class ='headline'>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <pre>{{ description }}</pre>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Problem',
  props: {
    title: String,
    description: String,
    color: String,
  },
};
</script>

<style>

</style>
