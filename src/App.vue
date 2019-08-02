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
        color="primary"
      >
        <span class="mr-2">About</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Algorithms'"
        color="primary"
      >
        <span class="mr-2">Algorithms</span>
      </v-btn>

      <v-btn
        v-if="isLoggedIn"
        v-on:click="currentPage = 'Letter'"
        color="primary"
      >
        <span class="mr-2">Cover Letter</span>
      </v-btn>

      <v-btn
        v-on:click="currentPage = 'Resume'"
        color="primary"
      >
        <span class="mr-2">Resume</span>
      </v-btn>

      <v-btn
        v-if="!isLoggedIn"
        v-on:click="currentPage = 'Login'"
        color="primary"
      >
        <span class="mr-2">login</span>
      </v-btn>
      <v-btn
        v-if="isLoggedIn"
        v-on:click="logout()"
        color="primary"
      >
        <span class="mr-2">logout {{ currentUser.username }}</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <About v-if="this.currentPage == 'About'"/>
      <Algorithms v-if="this.currentPage == 'Algorithms'"/>
      <Login v-on:loginListener="loginListener" v-if="this.currentPage == 'Login'"/>
      <Letter v-if="this.currentPage == 'Letter'"/>
      <Resume v-if="this.currentPage == 'Resume'"/>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import About from './components/About.vue';
import Algorithms from './components/Algorithms.vue';
import Login from './components/Login.vue';
import Letter from './components/Letter.vue';
import Resume from './components/Resume.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    About,
    Algorithms,
    Login,
    Letter,
    Resume,
  },
  methods: {
    async logout() {
      store.dispatch('logout');
    },
    loginListener(reply) {
      this.currentPage = reply;
    },
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'authStatus',
      'currentUser',
    ]),
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
