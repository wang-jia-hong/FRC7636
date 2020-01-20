<template>
  <div>
      <v-tabs
        v-model="currentTab"
        background-color="#002a5c"
        grow
        class="white--text"
      >
        <v-tab class="white--text" @click="changePath('/home')"> Home </v-tab>

        <v-tab>
          <v-menu class="white--text" open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <div
                text
                color="white"
                class="align-self-center white--text"
                v-on="on"
              >
                About
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(aboutItem, index) in aboutItems"
                :key="index"
                @click="changePath(`/about/${aboutItem}`)"
              >
                <v-list-item-title>{{ aboutItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>

        <v-tab>
          <v-menu open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <div class="align-self-center mr-4 white--text" text v-on="on">
                Events
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(eventItem, index) in eventItems"
                :key="index"
                @click="changePath(`/event/${eventItem}`)"
              >
                <v-list-item-title>{{ eventItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
        
        <v-tab>
          <v-menu
            class="align-self-center mr-4 white--text"
            open-on-hover
            down
            offset-y
          >
            <template v-slot:activator="{ on }">
              <div text class="align-self-center mr-4 white--text" v-on="on">
                Resources
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(resourceItem, index) in resourceItems"
                :key="index"
                @click="changePath(`/resource/${resourceItem}`)"
              >
                <v-list-item-title>{{ resourceItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
        <v-tab class="white--text" @click="changePath('/sponsor')"> Sponsors </v-tab>
      </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      currentTab: null,
      aboutItems: ["FIRST", "#7636", "Team History", "Contact", "Leader", "Mentor"],
      eventItems: ["News", "Past seasons"],
      resourceItems: ["Documents", "CADs", "Videos"],
    }
  },
  methods: {
    changePath(goToPath){
      this.$router.replace(goToPath)
    }
  }
}
</script>