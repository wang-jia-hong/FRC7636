<template>
    <div>
        <v-img
            aspect-ratio="2"
            src="@/assets/Elements/FrontIMG/IMG_9038.jpg"
            class="d-flex align-end"
        >
            <h1 class="ml-3 mb-2">
                FRC #7636<br />Robomania            
            </h1>
        </v-img>
        
        <div
            class="pa-10"
            style="background-color: #cbcbcb"
        >
            <div v-for="(cardItem, index) in cardItems" :key="index">
                <div class="card pa-6 mx-auto" height="220">
                    <v-row>
                        <v-col
                            v-if="index % 2 == 0"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" style="width: 95%">
                        </v-col>

                        <v-col order="2">
                            <div class="mb-2 display-1">
                                {{ cardItem.title }}
                            </div>
                            <div class="subtitle-1">
                                {{ cardItem.content }}
                            </div>
                        </v-col>
                        
                        <v-col
                            :order="imageHeight"
                            v-if="index % 2 == 1"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" style="width: 95%">
                        </v-col>
                    </v-row>
                </div>
                <hr color="#000" class="mx-auto my-10" style="max-width: 90%">
            </div>

            <div>
                <div style="color: black; font-size: 1.1em;" class="px-10 text-center">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            lg="3"
                            v-for="(bottomItem, index) in bottomItems"
                            :key="index"
                        >
                            
                            <div class="text-center">
                                <img :src="bottomItem.photo" style="width: 90%;">
                                {{ bottomItem.text }}
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <hr color="#8f8f8f" class="mx-auto mb-5" style="width: 85%">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        bottomItems: [
            {
                photo: require("@/assets/Elements/Everywhere-2019 Deep Space.png"),
                text: "FRC2019:Deep Space",
            },
            {
                photo: require("@/assets/Elements/Home/Charlee's Comets.jpeg"),
                text: "2019 Charlle's Comet",
            },
            {
                photo: require("@/assets/Logo7636.jpg"),
                text: "About FRC #7636",
            },
            {
                photo: "",
                text: "Coming up ~~~",
            }
        ],
        cardItems: [
            {
                title: "NEHS @ CTSP",
                content: "FRC #7636 Robomania is made up by students studying in National Experiemental High School at Central Taiwan Science Park.",
                imgPath: require("@/assets/Elements/Home/Home-CTSP.png"),
            },
            {
                title: "About Us",
                content: "We’re Robomania from Taiwan. Our team is a group of students who are passionate about robots and spare no effort to pursue our dreams. Year 2019 is our Rookie year in the field of FIRST, and we’ve gained a lot through the season. We are looking forward to improve in 2020 and share what we have to the society.",
                imgPath: "",
            },
            {
                title: "FRC 2019",
                content: "We’ve been participating in the Southern Cross Regional Competition located in NSW of Australia in our rookie year, 2019. We’ve gained a lot through the pass season. Our robot, Charlie’s Comet, had been upgraded and improved through the CTSP Pre-competition and the CTSP off season competition.",
                imgPath: require("@/assets/Elements/Home/IMG_8742.jpeg"),
            },
            {
                title: "Outreach",
                content: "Outreach program is one of the most important task that we do. It is very popular to use technology devices nowadays and it is very easy to reach education resources. We want to develop something defferent according to the different stories we’ve experienced. We offer camps to public and we also demonstrate the spirit and our team while science fair and some festivals.",
                imgPath: require("@/assets/Elements/Home/GroupPhoto.jpg"),
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
}
</script>

<style>
.card {
    background-color: #b2b2b2;
    width: 95%;
}
.contentSize {
    font-size: 30px;
}
.titleSize {
    font-size: 40px;
    font-weight: bold;
}
</style>