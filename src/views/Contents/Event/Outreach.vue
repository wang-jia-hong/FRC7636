
<template>
    <div>
      <v-img
          aspect-ratio="2"
          src="@/assets/2020-2021/outreach/outreach_main.jpg"
          class="d-flex align-end"
      >
      <h1 class="ml-3 mb-2" style="font-style: italic; font-size: 7vmin;">
          Outreach            
      </h1>
      </v-img>
      
      <div
        class="box"
      >
        <div class="inside">
          <div v-for="(event, index) in events" :key="index">
            <div class="pa-6 mx-auto" height="220">
              <v-hover v-slot:default="{ hover }">
                <v-row @click="changePath(event.path)" :class="`elevation-${hover ? 20 : 0}`">
                    <v-col
                        cols="12"
                        md="4"
                        class="text-center my-auto"
                    >
                    </v-col>
                    <v-col order="2">
                        <div class="mb-2 titleSize">
                            {{ event.title }}
                        </div>
                        <div class="contentSize">
                            {{ event.text }}
                        </div>
                    </v-col>
                </v-row>                  
              </v-hover>
            </div>
              <hr color="#3b3b3b" class="mx-auto my-3" style="max-width: 80%">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: ()=> ({
      events:[
        {
          
          title: "8/23 Communicate with team 7130",
          text: "During the summer vacation, team7130 invited us and team 6998 for technical exchanges and sharing. We briefly introduced our respective teams and exchanged each other's future plans.",
          path: "/Communicate with team 7130",
        },
      ]
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight () {
      // eslint-disable-next-line no-console
      console.log(document.body.clientWidth)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 1
        case 'lg': return 3
        case 'xl': return 3
      }
    },
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

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>