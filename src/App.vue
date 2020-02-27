<template>
<v-app>
    
    <v-container fluid class="pa-0 d-flex flex-column justify-center">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
        <!-- <img src="@/assets/Elements/original.gif" style="position:fixed; width: 20%; top: 10%;animation-name: nyanCat; animation-duration:8s; animation-iteration-count:infinite;"> -->
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

  data: ()=> ({
    keys: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
  }),

  created() {
    window.addEventListener("keyup", this.listen);
  },
  // methods: {
  //   listen(e){
  //     const key = e.which || e.keyCode || e.detail;
  //   }
  // },
};
</script>    

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

* {
  font-family: "Raleway","fantasy","sans-serif";
}

@keyframes nyanCat {
  from{
    left: -30%;
  }
  to{
    left: 100%;
  }
}

</style>