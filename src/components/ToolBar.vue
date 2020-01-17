<template>
  <div>
    <v-card height="1000">
      <v-tabs
        color="success"
        v-model="currentTab"
        background-color="#222222"
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
            <v-list-item  v-for="(aboutItem, index) in aboutItems" :key="index">
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

      <v-tabs-items v-model="currentTab">

      </v-tabs-items>

    </v-card>    
  </div>   
</template>

<script>
  export default {
    data () {
      return {
        currentTab: null,
        aboutItems: ["About us", "History", "Calender", "Contact Us"],
        robotItems: ["HandBook","CAD","Code"],
        mediaItems: ["Photos", "Videos"],
        
      }
    },
  }
</script>