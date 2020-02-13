<template>
    <div>
        <iframe 
         class=""
         width="100%"
         height="500"
         frameborder="0"
         src="https://www.youtube.com/embed/gmiYWTmFRVE"
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen>
        </iframe>
        <div 
        class="pa-10 contentBackground"
        height="800">
            <v-card color="#767774" height="420">
                As for the theme 2020, two alliances work together to go on the games. During Teleop drivers take control of the droids, gaining points by collecting and shooting the Power Cells into the power ports, completing Control Panel to the specifised color or rotations, and hang on the Generator switch to defeat our enemies. To complete the missions, it means that our robot needs not only the technique of accurate-shooting but also the skills of controlling and smooth-moving, this will be a challenge for #7636 in 2020. We are willing to make the perfect robot that can do the best job. FRC#7636, May the force be with all of us.
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
        background-color: "#A1A29E",
    }
</style>