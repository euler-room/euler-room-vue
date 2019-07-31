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
        <v-flex >
          <p>
            This page is under construction. When complete,
            it will return a JSON Web Token from a Rails API
            which will then be used to authenticate the user for subsequent requests.
          </p>
          <v-container
            fluid
            fill-height
          >
            <v-layout
              align-center
              justify-center
            >
              <v-flex
                xs12
                sm8
                md4
              >
                <v-card class="elevation-12">
                  <v-toolbar
                    color="primary"
                    dark
                    flat
                  >
                    <v-toolbar-title>Login form</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="login"
                        label="Login"
                        name="login"
                        prepend-icon="person"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      v-on:click="authenticate"
                    >
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    login: '',
    password: '',
  }),
  methods: {
    authenticate() {
      alert('logged in!!');
    },
  },
};
</script>

<style>

</style>
