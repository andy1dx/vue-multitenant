<template>
  <div class="login">
    <HeaderComponent />
    <b-container>
      <b-row cols="1" cols-sm="12" cols-md="12" cols-lg="12">
        <b-col class="pt-5">
          <b-form @submit="onSubmit">
            <b-form-group>
              <b-form-input
                id="input-key"
                v-model="form.key"
                type="text"
                required
                placeholder="Enter tenant key"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input
                id="input-username"
                v-model="form.username"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input
                id="input-password"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>  
    </b-container>
  </div>
</template>

<script>
  import HeaderComponent from './layout/HeaderComponent';
  export default {
    components: {
      HeaderComponent,
    },
    data: () => ({
      form: {
        key: '',
        username: '',
        password: '',
      },
    }),
    created() {
      // if (this.$store.getters.isLoggedIn) {
      //   this.$router.push('/asr/check');
      // }
    },
    methods: {
      onSubmit(evt) {
        const key = this.form.key;
        const username = this.form.username;
        const password = this.form.password;
        this.progressing = true;
        this.$store
          .dispatch('login', { key, username, password })
          .then(( data ) => {
            if (data.result) {
             this.$router.push('/asr/check');
            }
          })
          .catch(( err ) => {
            alert(err);
          });
     },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
