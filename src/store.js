import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, user) {
      state.status = 'success';
      state.token = user.data.attributes.auth_token;
      // eslint-disable-next-line no-param-reassign
      delete user.data.attributes.auth_token;
      state.user = user.data.attributes;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
      state.user = {};
    },
  },
  actions: {
    login({ commit }, creds) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'users/login', data: creds, method: 'POST' })
          .then((resp) => {
            const token = resp.data;
            const currentUser = resp.data;
            localStorage.setItem('token', token);
            // Add the following line:
            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', currentUser);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    },
    foo({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: '/login', data: user, method: 'POST' })
          .then((resp) => {
            const token = resp.data;
            // const user = resp.data;
            localStorage.setItem('token', token);
            // Add the following line:
            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    currentUser: state => state.user,
  },
});
