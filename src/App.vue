<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <FormBackground />
      <Login />
    </v-container>
  </v-app>
</template>

<script>
import Login from '@/views/Login'
import FormBackground from '@/views/FormBackground';
export default {
  name: 'App',

  components: {
    Login,
    FormBackground
  },

  data: () => ({
    //
  }),
};
</script>
