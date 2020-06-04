<template>
  <v-form v-model="valid">
     <v-text-field
            v-model="username"
            :rules="usernameValidation"
            :counter="10"
            label="Username"
            required
          ></v-text-field>
       
          <v-text-field
            v-model="password"
            :rules="passwordValidation"
            :counter="10"
            label="password"
            required
          ></v-text-field>

          <v-btn block color="primary" :disabled="!valid" @click="submit">Login</v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'home-login',
    data: () => ({
      valid: false,
      password: '',
      passwordValidation: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters',
      ],
      username: '',
      usernameValidation: [
        v => !!v || 'Username is required',
        v => /.+@.+/.test(v) || 'Username must be valid',
      ],
    }),
    methods: {
      submit () {
        alert('login !');
      }
    }
  }
</script>
