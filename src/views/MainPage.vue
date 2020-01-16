<template>
  <v-app>
    <v-card
     height="1000"
    >
      <v-card
       color="#002a5c">
        <v-img
        aspect-ratio="3"
        contain
        src="../assets/Frontimg.jpg"
        >
        </v-img>        
      </v-card>
      <v-tabs
        v-model="tab"
        background-color="#00001d"
        grow
      >
        <v-tab>
          Home
        </v-tab>

        <v-tab>
          <v-menu
          open-on-hover
          down
          offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
              v-on="on"
              >
                About
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title >About us</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>History</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Calender</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Contact Us</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>          
        </v-tab>

        <v-tab>
          FIRST
        </v-tab>

        <v-tab>
          <v-menu
          open-on-hover
          down
          offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
              v-on="on"
              >
                Robots
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title >HandBook</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>CAD</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Code</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>          
        </v-tab>
        <v-tab>
          <v-menu
          open-on-hover
          down
          offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
              v-on="on"
              >
                Media
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title >Photos</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Videos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>          
        </v-tab>

        <v-tab>
          Sponsors
        </v-tab>

        <v-tab>
          login
        </v-tab>
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
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
      }
    },
  }
</script>