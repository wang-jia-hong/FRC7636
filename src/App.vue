<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <FormBackground />
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import FormBackground from '@/components/FormBackground';
export default {
  name: 'App',
  components: {
    FormBackground
  },

  data: () => ({
    //
  }),
};
</script>
