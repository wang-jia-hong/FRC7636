<template>
  <v-app>
    <v-container class=" d-flex flex-column justify-center">
        <Header></Header>
        <Frontimg></Frontimg>
        <router-view></router-view>
        <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Frontimg from './components/Frontimg';
export default {
  name: 'App',
  components: {
      Header,
      Footer,
      Frontimg,
  },

  data: () => ({
    //
  }),
};
</script>