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
                @click="changePath(`/${aboutItem}`)"
              >
                <v-list-item-title>{{ aboutItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>

        <v-tab>
          <v-menu open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <div class="align-self-center white--text" text v-on="on">
                Events
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(eventItem, index) in eventItems"
                :key="index"
                @click="changePath(`/${eventItem}`)"
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
                @click="changePath(`/${resourceItem}`)"
              >
                <v-list-item-title>{{ resourceItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>

        <v-tab class="white--text" @click="changePath('/Contact')"> Contacts </v-tab>
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
      aboutItems: ["FIRST", "Team 7636", "Outreach", "Leader", "Mentor"],
      eventItems: ["news", "past-seasons"],
      resourceItems: ["Documents", "CADs", "Videos"],
    }
  },
  methods: {
    changePath(goToPath){
      this.$router.push(goToPath).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  }
}
</script>