<template>
    <div>
        <iframe
            aspect-ratio="2"
            class="d-flex align-end"
            width="100%"
            height="500"
            frameborder="0"
            src="https://www.youtube.com/embed/Mew6G_og-PI"
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
                            <img src="@/assets/Elements/Everywhere-2019 Deep Space.png" style="width: 95%">
                        </v-col>
                        <v-col order="2">
                            <div class="mb-2 titleSize">
                                FRC 2019: Deep Space
                            </div>
                            <div class="contentSize">
                                As for the theme of 2019, we will have to grab and deliver the Hatch Panels and the Cargo and attach or put it onto the rockets and cargo ships. Three teams in the alliance had to leave the three-leveled platform at the beginning, and return at end game time. We have to drive to one of the many cargo ships and rockets to score. What’s special is, we connected the webcam to our driver in which that we can score more points during san storm period.
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