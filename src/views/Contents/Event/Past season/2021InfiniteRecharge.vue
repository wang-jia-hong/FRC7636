<template>
    <div>
        <iframe
            aspect-ratio="2"
            class="d-flex align-end"
            width="100%"
            height="500"
            frameborder="0"
            src="https://www.youtube.com/embed/I77Dz9pfds4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <div 
         class="pa-10"
         style="background-color: #fafafa"
        >
            <div style="background-color: #a3a3a3">
                <div class="pa-6 mx-auto" height="220">
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img src="@/assets/Elements/Everywhere-2020 Infinite Recharge.png" style="width: 95%">
                        </v-col>
                        <v-col order="2">
                            <div class="mb-2 titleSize ">
                                FRC 2021: Infinite Recharge
                            </div>
                            <div class="contentSize">
                                wait a minutes
                            </div>
                        </v-col>
                    </v-row>                    
                </div>
            </div>
            <v-card-text>
                <carousel-3d>      
                    <slide v-for="i in 5" :index="i" :key="i">
                        <span></span>
                    </slide>
                </carousel-3d>
            </v-card-text>
        </div>

    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
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
data (){
    return{
        slides: 5,    
    }
},

components: {
    Carousel3d,
    Slide
}
}
</script>
<style>
.contentSize {
    font-size: 4vmin;
}
.titleSize {
    font-size: 8vmin;
    font-weight: bold;
}
</style>