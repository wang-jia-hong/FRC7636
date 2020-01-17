<template>
  <v-app>
    <v-container class=" d-flex flex-column justify-center">
        <Header></Header>
        <ToolBar></ToolBar>
        <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ToolBar from '../components/ToolBar.vue'
export default {
  name: 'App',
  components: {
      Header,
      Footer,
      ToolBar,
  },

  data: () => ({
    //
  }),
};
</script>