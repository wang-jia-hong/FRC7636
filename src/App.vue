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
* {
  font-family: Helvetica, Arial, "文泉驛正黑", "WenQuanYi Zen Hei", "儷黑 Pro",
    "LiHei Pro", "黑體-繁", "Heiti TC", "微軟正黑體", "Microsoft JhengHei",
    sans-serif!important;
}
</style>