<template>
    <div>
        <v-img
            aspect-ratio="2"
            src="@/assets/FrontIMG/FrontIMGTest.jpg"
            class="d-flex align-end"
        >
            <h1 class="ml-3 mb-2">
                FRC #7636<br />Robomania            
            </h1>
        </v-img>
        
        <div
            class="pa-10"
            style="background-color: #A1A29E"
        >
            <div v-for="(cardItem, index) in cardItems" :key="index">
                <div class="card pa-6 mx-auto" height="220">
                    <v-row>
                        <v-col
                            v-if="index % 2 == 0"
                            cols="12"
                            md="3"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" width="140">
                        </v-col>

                        <v-col order="2">
                            <h1 class="mb-2">
                                {{ cardItem.title }}
                            </h1>
                            <p>
                                {{ cardItem.content }}
                            </p>
                        </v-col>
                        
                        <v-col
                            :order="imageHeight"
                            v-if="index % 2 == 1"
                            cols="12"
                            md="3"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" width="140">
                        </v-col>
                    </v-row>
                </div>
                <hr color="#000" class="mx-auto my-10" style="max-width: 90%">
            </div>

            <div>
                <div color="#a1a29e" class="px-10 text-center">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            lg="3"
                            v-for="(bottomItem, index) in bottomItems"
                            :key="index"
                        >
                            <img :src="bottomItem.photo" width="200">
                            <div class="text-center">
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
                photo: "HomePage/Logo7636.jpg",
                text: "FRC2019:Deep Space",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "2019 Charlle's Comet",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "About FRC #7636",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "Coming up ~~~",
            }
        ],
        cardItems: [
            {
                title: "NEHS @ CTSP",
                content: "FRC #7636 Robomania is made up by students studying in National Experiemental High School at Central Taiwan Science Park.",
                imgPath: "Elements/Home/Home-CTSP.png"
            },
            {
                title: "About Us",
                content: "We’re Robomania from Taiwan. Our team is a group of students who are passionate about robots and spare no effort to pursue our dreams. Year 2019 is our Rookie year in the field of FIRST, and we’ve gained a lot through the season. We are looking forward to improve in 2020 and share what we have to the society.",
                imgPath: "Elements/Home/Home-CTSP.png"
            },
            {
                title: "FRC 2019",
                content: "We’ve been participating in the Southern Cross Regional Competition located in NSW of Australia in our rookie year, 2019. We’ve gained a lot through the pass season. Our robot, Charlie’s Comet, had been upgraded and improved through the CTSP Pre-competition and the CTSP off season competition.",
                imgPath: "Elements/Home/Home-CTSP.png"
            },
            {
                title: "Outreach",
                content: "Outreach program is one of the most important task that we do. It is very popular to use technology devices nowadays and it is very easy to reach education resources. We want to develop something defferent according to the different stories we’ve experienced. We offer camps to public and we also demonstrate the spirit and our team while science fair and some festivals.",
                imgPath: "Elements/Home/Home-CTSP.png"
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
    }
}
</script>

<style>
.card {
    background-color: #767774;
    width: 95%;
}
</style>