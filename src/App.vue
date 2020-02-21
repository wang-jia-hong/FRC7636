<template>
<v-app>
    <v-container class=" d-flex flex-column justify-center">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </v-container>
  </v-app> 
</template>

<script>
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
export default {
  name: 'App',
  components: {
      Header,
      Footer,
  },
};
</script>    

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

* {
  font-family: "Raleway", "fantasy", "sans-serif";
}

</style>