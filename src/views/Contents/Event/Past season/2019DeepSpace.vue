<template>
    <div>
        <iframe 
            class=""
            width="100%"
            height="500"
            frameborder="0"
            src="https://www.youtube.com/embed/Mew6G_og-PI"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <div 
        class="pa-10 contentBackground"
        height="800">
            <v-card color="#767774" height="420">
                As for the theme of 2019, we will have to grab and deliver the Hatch Panels and the Cargo and attach or put it onto the rockets and cargo ships. Three teams in the alliance had to leave the three-leveled platform at the beginning, and return at end game time. We have to drive to one of the many cargo ships and rockets to score. What’s special is, we connected the webcam to our driver in which that we can score more points during san storm period.
            </v-card>

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
    .contentBackground{
        background-color: #A1A29E;
    }
</style>