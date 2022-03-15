<template>

  <div id="header">   
    <div id="header-logo">    
    
    </div>
    
    <div class="header-button">

            <v-btn class="black--text mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small>
                    <a class="black--text btn-text">Home</a>
                </v-btn>

                <v-btn class="black--text mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small>
                    <v-menu open-on-hover down offset-y left>
                        <template v-slot:activator="{ on }">
                            <div text class="align-self-center" v-on="on">
                                <a class="black--text btn-text">About</a>
                                <v-icon>mdi-chevron-down</v-icon>
                            </div>
                        </template>
                        <v-list class="menu">
                        <v-list-item
                            v-for="(aboutItem, index) in aboutItems"
                            :key="index"
                            @click="changePath(`/${aboutItem}`)"
                        >
                            <v-list-item-title><a class="list-item black--text">{{ aboutItem }}</a></v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-btn class="black--text mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small>
                    <v-menu open-on-hover down offset-y left>
                        <template v-slot:activator="{ on }">
                            <div text class="align-self-center" v-on="on">
                                <a class="black--text btn-text">Event</a>
                                <v-icon :class="{ none2: active }">mdi-chevron-down</v-icon>
                            </div>
                        </template>
                        <v-list class="menu">
                        <v-list-item
                            v-for="(eventItem, index) in eventItems"
                            :key="index"
                            @click="changePath(`/${eventItem}`)"
                        >
                            <v-list-item-title><a class="list-item black--text">{{ eventItem }}</a></v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-btn class="black--text mr-2" @click="changePath('/resource')" rounded color="transparent" elevation="0" x-small>
                    <a class="black--text btn-text">Resource</a>
                </v-btn>

                <v-btn class="black--text mr-2" @click="changePath('/sponsor')" rounded color="transparent" elevation="0" x-small>
                    <a class="black--text btn-text">Sponsor</a>
                </v-btn>

                <v-btn class="black--text" @click="changePath('/Contact')" rounded color="transparent" elevation="0" x-small>
                    <a class="black--text btn-text">Contact</a>
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
