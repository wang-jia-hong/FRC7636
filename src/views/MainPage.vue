<template>
  <div>
    <v-card height="1000">
      <!-- 封面圖 -->
      <v-card color="#002a5c">      
        <v-img
          aspect-ratio="3"
          contain
          src="../assets/Frontimg.jpg"
        >
        </v-img>        
      </v-card>

      <v-tabs
        color="success"
        v-model="tab"
        background-color="transparent"
        grow
      >
        <v-tab class="white--text"> Home </v-tab>

        <v-menu
          class="align-self-center mr-4 white--text"
          open-on-hover
          down
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              color="white"
              class="align-self-center mr-4 white--text"
              v-on="on"
            >
              About
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="" v-for="(aboutItem, index) in aboutItems" :key="index">
              <v-list-item-title>{{ aboutItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>          

        <v-tab class="white--text"> FIRST </v-tab>

        <v-menu
          open-on-hover
          down
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="align-self-center mr-4 white--text"
              text
              v-on="on"
            >
              Robots
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(robotItem, index) in robotItems" :key="index">
              <v-list-item-title>{{ robotItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>          

        <v-menu
          open-on-hover
          down
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              class="align-self-center mr-4 white--text"
              v-on="on"
            >
              Media
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(mediaItem, index) in mediaItems" :key="index">
              <v-list-item-title>{{ mediaItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-tab class="white--text"> Sponsors </v-tab>

        <v-tab class="white--text"> login </v-tab>

      </v-tabs>

      <v-tabs-items v-model="tab">

      </v-tabs-items>

    </v-card>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>     
  </div>   
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        aboutItems: ["About us", "History", "Calender", "Contact Us"],
        robotItems: ["HandBook","CAD","Code"],
        mediaItems: ["Photos", "Videos"],
      }
    },
  }
</script>