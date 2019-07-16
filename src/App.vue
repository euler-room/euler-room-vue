<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon>
        <v-img
          :src="require('./assets/er-logo.png')"
          contain
          height="150%"
        ></v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Euler_</span>
        <span class="font-weight-light">Room</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        v-on:click="currentPage = 'About'"
        color='#dddad0'
      >
        <span class="mr-2">About</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Algorithms'"
        color='#dddad0'
      >
        <span class="mr-2">Algoritms</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Letter'"
        color='#dddad0'
      >
        <span class="mr-2">A Letter to You</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Resume'"
        color='#dddad0'
      >
        <span class="mr-2">Resume</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Login'"
        color='#dddad0'
      >
        <span class="mr-2">login</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <About v-if="this.currentPage == 'About'"/>
      <Algorithms v-if="this.currentPage == 'Algorithms'"/>
    </v-content>
  </v-app>
</template>

<script>
import About from './components/About.vue';
import Algorithms from './components/Algorithms.vue';

export default {
  name: 'App',
  components: {
    About,
    Algorithms,
  },
  data() {
    return {
      currentPage: 'About',
    };
  },
};
</script>
<style scoped>
  .application{
    color: #3c3b3a;
    background: #dacfb3;
  }
  .v-toolbar{
    color: #3c3b3a;
    background: #dacfb3;
  }
  .d-blue{
    background: #0f2343;
    color: #3c3b3a;
  }
  .l-blue{
    background: #21496c;
    color: #3c3b3a;
  }
  .orange{
    background: #db8420;
    color: #3c3b3a;
  }
  .yellow{
    background: #c43912;
    color: #3c3b3a;
  }
  .cream{
    background: #3c3b3a;
  }
</style>
