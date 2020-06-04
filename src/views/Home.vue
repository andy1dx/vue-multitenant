<template>
  <v-container>
    <v-card color="" class="white--text">
    <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs4>
          <HomeLoginComponent />
          </v-flex>
      <v-flex xs8>
        <v-card dark tile flat color="error">
          <v-card-text class="px-0">8</v-card-text>
        </v-card>
      </v-flex>
        </v-layout>
    </v-container>
  </v-card>
  </v-container>
</template>

<script>
import HomeLoginComponent from '../components/home/Login.vue'
export default {
  name: 'home-page',
  components: {
    HomeLoginComponent
  },
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>
