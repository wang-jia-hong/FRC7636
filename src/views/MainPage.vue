<template>
  <v-app>
    <v-card
     height="500"
    >
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">FRC 7636</h1>
      </v-card-title>
      <v-tabs
        v-model="tab"
        background-color="#00002d"
        grow
      >
        <v-tab
          v-for="item in links"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in links"
          :key="item"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
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
        links: [
          'Home',
          'About Us',
          'Social Media',
          'support us',
          'login'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>