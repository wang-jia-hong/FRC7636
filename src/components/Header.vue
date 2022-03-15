<template>

  <div id="header">   
    <div id="header-logo">    
    
    </div>
    
    <div class="header-button">
            <v-btn class="black--text" @click="changePath('/')" rounded color="transparent" elevation="0">
                <a class="black--text">Home</a>
            </v-btn>
            <v-btn class="black--text" @click="changePath('/')" rounded color="transparent" elevation="0">
                <v-menu class="black--text" open-on-hover down offset-y left>
                    <template v-slot:activator="{ on }">
                        <div text class="align-self-center" v-on="on">
                            <a class="black--text">About</a>
                            <v-icon>mdi-chevron-down</v-icon>
                        </div>
                    </template>
                    <v-list class="menu">
                    <v-list-item
                        class="black--text"
                        v-for="(aboutItem, index) in aboutItems"
                        :key="index"
                        @click="changePath(`/${aboutItem}`)"
                        light
                    >
                        <v-list-item-title>{{ aboutItem }}</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
            </div>
  </div>
</template>

<script>

export default {
    data: ()=> ({
        aboutItems: ["FIRST", "Team 7636", "Leader", "Mentor"],
        eventItems: ["News", "Outreach", "Past-seasons"],
    }),
    methods: {
    changePath(goToPath) {
      this.$router.push(goToPath).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
  },
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/header.scss";
</style>
