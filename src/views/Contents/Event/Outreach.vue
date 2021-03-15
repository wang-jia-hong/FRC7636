
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
      
      <div class="box">
            <div v-for="(event, index) in events" :key="index">
                <div class="pa-6">
                    <v-row>
                        <v-col
                            :order="imageHeight"
                            v-if="index % 2 == 0"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="item.imgPath" style="width: 95%; background-color:black;">
                        </v-col>

                        <v-col order="2">
                            <div class="contentSize" style="font-size:3vmin;">
                                {{ item.content }}
                            </div>
                        </v-col>
                        <v-col
                            v-if="index % 2 == 1"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="item.imgPath" style=" width: 95%;">
                        </v-col>                        
                    </v-row>
                </div>                                     
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: ()=> ({
            events:
            { 
                "": [
                    
                ],
                "8/23 Communicate with team 7130": [
                    {
                      photo: require(""),
                      text: ""
                    },
                    {

                    },
                ],
                
            },
      
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