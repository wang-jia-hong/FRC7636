<template>
  <div>

      <v-tabs
        color="success"
        v-model="currentTab"
        background-color="#222222"
        grow
        class="white--text"
      >
        <v-tab @click="changePath('/home')"> Home </v-tab>
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
        <v-tab class="white--text" @click="changePath('FIRST')"> FIRST </v-tab>

        <v-tab>
          <v-menu open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <div class="align-self-center mr-4 white--text" text v-on="on">
                Robots
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(robotItem, index) in robotItems"
                :key="index"
              >
                <v-list-item-title>{{ robotItem }}</v-list-item-title>
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
                Media
                <v-icon>mdi-menu-down</v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(mediaItem, index) in mediaItems"
                :key="index"
              >
                <v-list-item-title>{{ mediaItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
        <v-tab class="white--text"> Sponsors </v-tab>
      </v-tabs>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: null,
      aboutItems: ["About us", "History", "Calender", "Contact Us"],
      robotItems: ["HandBook", "CAD","Code"],
      mediaItems: ["Photos", "Videos"],
    }
  },
  methods: {
    changePath(goToPath){
      this.$router.replace(goToPath)
    }
  }
}
</script>