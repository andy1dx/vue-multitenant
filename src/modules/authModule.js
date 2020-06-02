import axios from 'axios';

const authModule = {
  state: {
    status: '',
    errorMessage: '',
    key: localStorage.getItem('key') || '',
    user_key: localStorage.getItem('user_key') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, key, user_key) {
      state.status = 'success';
      state.key = key;
      state.user_key = user_key;
    },
    auth_error(state, status) {
      state.status = 'error';
      state.errorMessage = status;
    },
    logout(state) {
      state.status = '';
      state.key = '';
    }
  },
  actions: {
    login({ commit }, key, username, password) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios
          .post(process.env.VUE_APP_BASE_URI + '/comdesk_data_api/users/auth', key, username, password)
          .then(resp => {
            if (!resp.data.result) {
              commit('auth_error', resp.data.msg);
            } else {
              localStorage.setItem('key', key.key);
              localStorage.setItem('user_key', resp.data.user_key);
              commit('auth_success', key.key, resp.data.user_key);
              resolve(resp.data);
            }
          })
          .catch(err => {
            commit('auth_error', err.data.user_key.codes);
            localStorage.clear();
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout');
        localStorage.clear();
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.key,
    authStatus: state => state.status,
    errorMessage: state => state.errorMessage,
    authKey: state => state.key,
    authUserkey: state => state.user_key,
  }
};

export default authModule;
