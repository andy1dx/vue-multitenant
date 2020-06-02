<template>
<div class="header">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav class="header-link">
      <b-nav-item href="https://p01-data01a.comdesk.com/upload/" target="_blank">UPLOAD</b-nav-item>
      <b-nav-item v-if="isLogin"><router-link to = "/asr/check">ASR CHECK</router-link></b-nav-item>
      <b-nav-item v-if="isLogin"><router-link to = "/asr/approve">ASR APPROVE</router-link></b-nav-item>
      <b-nav-item v-if="isLogin"><router-link to = "/txt/check">FORMATTER CHECK</router-link></b-nav-item>
      <b-nav-item v-if="isLogin"><router-link to = "/txt/approve">FORMATTER APPROVE</router-link></b-nav-item>
      <b-nav-item v-if="isLogin"><a @click="logout()">LOGOUT</a></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  export default {
    data: () => ({
      isLogin: false,
    }),
    created() {
      if (this.$store.getters.isLoggedIn) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    methods: {
      logout() {
        this.$store
          .dispatch('logout')
          .then(( data ) => {
            this.$router.push('/login');
          })
          .catch(( err ) => {
            alert(err);
          });
      },
    },
  };
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link a{
  color:#ffffff;
}
.navbar-dark .navbar-nav .nav-link{
  color:#ffffff;
}

</style>