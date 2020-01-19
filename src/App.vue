<template>
  <v-app>
    <v-container class=" d-flex flex-column justify-center">
        <Header></Header>
        <ToolBar></ToolBar>
        <router-view></router-view>
        <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ToolBar from '../src/components/ToolBar';
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