<template>
    <div id="outside">
    <div id="home">
        
        <div class="home-header" :class="{ none: active }">   
            <div id="header-logo">    
           
            </div>
            
            <div class="header-button">

                <v-btn class="mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <a class="white--text btn-text" :class="{ none2: active }">Home</a>
                </v-btn>

                <v-btn class="mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <v-menu open-on-hover down offset-y left>
                        <template v-slot:activator="{ on }">
                            <div text class="align-self-center" v-on="on">
                                <a class="white--text btn-text" :class="{ none2: active }">About</a>
                                <v-icon :class="{ none2: active }">mdi-chevron-down</v-icon>
                            </div>
                        </template>
                        <v-list class="menu" :class="{ none1: active }">
                        <v-list-item
                            v-for="(aboutItem, index) in aboutItems"
                            :key="index"
                            @click="changePath(`/${aboutItem}`)"
                        >
                            <v-list-item-title><a class="list-item white--text" :class="{ none2: active }">{{ aboutItem }}</a></v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-btn class="mr-2" @click="changePath('/')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <v-menu open-on-hover down offset-y left>
                        <template v-slot:activator="{ on }">
                            <div text class="align-self-center" v-on="on">
                                <a class="white--text btn-text" :class="{ none2: active }">Event</a>
                                <v-icon :class="{ none2: active }">mdi-chevron-down</v-icon>
                            </div>
                        </template>
                        <v-list class="menu" :class="{ none1: active }">
                        <v-list-item
                            v-for="(eventItem, index) in eventItems"
                            :key="index"
                            @click="changePath(`/${eventItem}`)"
                        >
                            <v-list-item-title><a class="list-item white--text" :class="{ none2: active }">{{ eventItem }}</a></v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-btn class="mr-2" @click="changePath('/resource')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <a class="white--text btn-text" :class="{ none2: active }">Resource</a>
                </v-btn>

                <v-btn class="mr-2" @click="changePath('/sponsor')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <a class="white--text btn-text" :class="{ none2: active }">Sponsor</a>
                </v-btn>

                <v-btn @click="changePath('/Contact')" rounded color="transparent" elevation="0" x-small :class="{ none2: active }">
                    <a class="white--text btn-text" :class="{ none2: active }">Contact</a>
                </v-btn>

            </div>
        </div>
      
        <div class="spacer" >
            
        </div>

        
        
        
        <div
            class="box"
        >
            <div class="pb-12 pt-0 pa-8">
                <div class="pa-6 mx-auto" height="220" style="width: 95%;">
                    <a href="https://www.frctaichungregional.com.tw/"  style="text-decoration:none; color:white;">
                        <v-hover v-slot:default="{ hover }">
                            <v-row :class="`elevation-${hover ? 15 : 0}`">
                                <v-col
                                    cols="12"
                                    md="4"
                                    class="text-center my-auto"
                                >
                                    <img src="@/assets/Elements/Home/Home-CTSP.png" style="width: 45%">
                                </v-col>
                                    
                                <v-col order="2">
                                    <div class="mb-2 titleSize">
                                        NEHS @ CTSP
                                    </div>
                                     
                                    <div class="contentSize">
                                        FRC #7636 Robomania is made up by students studying in National Experiemental High School at Central Taiwan Science Park.
                                    </div>
                                </v-col>
                             </v-row>                            
                        </v-hover>                            
                    </a>
                </div>
            </div>
                <v-row no-gutters class="pt-6 pb-6" style="height: 60vh;">
                    <v-col
                     cols="5"
                     class="d-flex align-center justify-center pa-12 "
                     style="background-color: #004eb3; height:100%;"
                    >
                        <div class="text-center" style="font-size:5vmin;">
                            NEHS @ CTSP<br>
                            Students Mentors<br>
                            <h1> ∞ <br> </h1>
                            Passions<br>                                
                        </div>
                    </v-col>
                    <v-col
                     cols="7"
                     style="height:100%"
                    >
                        <v-row no-gutters style="height:100%">
                            <v-col
                                cols="6"
                                style="font-size:4vmin; height:50%;"
                                class="align-center justify-center d-flex"
                                v-for="(block, index) in blocks"
                                :key="index"
                                :class="block.color"
                            >
                                <div class="text-center ma-10">
                                    {{block.content1}} <br>
                                    {{block.content2}} <br>                                            
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <div style="width:90%;" class="mx-auto pb-12 pt-12 pa-8" >
                    <div v-for="(cardItem, index) in cardItems" :key="index">
                        <v-hover v-slot:default="{ hover }">
                            <div class="pa-6" height="220" :class="`elevation-${hover ? 20 : 0}`" @click="changePath(cardItem.path)">
                                <v-row>
                                    <v-col
                                        :order="imageHeight"
                                        v-if="index % 2 == 0"
                                        cols="12"
                                        md="4"
                                        class="text-center my-auto"
                                    >
                                        <img :src="cardItem.imgPath" style="width: 95%; background-color:black;">
                                    </v-col>
                                    <v-col order="2">
                                        <div class="mb-2 titleSize">
                                            {{ cardItem.title }}
                                        </div>
                                        <div class="contentSize">
                                            {{ cardItem.content }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        v-if="index % 2 == 1"
                                        cols="12"
                                        md="4"
                                        class="text-center my-auto"
                                    >
                                        <img :src="cardItem.imgPath" style=" width: 95%;">
                                    </v-col>                        
                                </v-row>
                            </div>                            
                        </v-hover>
                        <hr color="#8f8f8f" class="mx-auto my-10" style="max-width: 90%">
                    </div>                
                </div>
                <div>
                    <div style="color: black; font-size: 1.1em;" class="pb-0 pa-10 text-center">
                        <v-row class="pb-12">
                            <v-col
                                cols="12"
                                sm="6"
                                lg="3"
                                v-for="(bottomItem, index) in bottomItems"
                                :key="index"
                            >
                                <v-hover v-slot:default="{ hover }">
                                    <div class="text-center pt-6"  :class="`elevation-${hover ? 16 : 0}`" @click="changePath(bottomItem.path)">
                                        <img :src="bottomItem.photo" style="width: 90%;" class="mx-auto"><br>
                                        {{ bottomItem.text }}
                                    </div>                                
                                </v-hover>                               
                            </v-col>
                        </v-row>                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data: ()=> ({
        
        currentTab: null,
        aboutItems: ["FIRST", "Team 7636", "Leader", "Mentor"],
        eventItems: ["News", "Outreach", "Past-seasons"],

        active: false,

        blocks:[
            {
                content1: "30+",
                content2: "Team Members",
                color: "blockColor1",
            },
            {
                content1: "3",
                content2: "Deartments",
                color: "blockColor2",
            },
            {
                content1: "3",
                content2: "Years Participants",
                color: "blockColor2",
            },
            {
                content1: "4",
                content2: "Regional Competitions",
                color: "blockColor1",
            },
        ],
        cardItems: [
            {
                title: "About Us",
                content: "We’re Robomania from Taiwan. Our team is a group of students who are passionate about robots and spare no effort to pursue our dreams. Year 2019 is our Rookie year in the field of FIRST, and we’ve gained a lot through the season. We are looking forward to improve in 2020 and share what we have to the society.",
                imgPath: require("@/assets/Elements/Home/UnicornRMBG.png"),
                path: "/Team 7636",
            },
            {
                title: "FRC 2020",
                content: "We’ve been participating in the Southern Cross Regional Competition located in NSW of Australia in our rookie year, 2019. We’ve gained a lot through the pass season. Our robot, Charlie’s Comet, had been upgraded and improved through the CTSP Pre-competition and the CTSP off season competition.",
                imgPath: require("@/assets/Elements/Home/IMG_8742.jpg"),
                path: "/2020InfiniteRecharge",
            },
            {
                title: "Outreach",
                content: "Outreach program is one of the most important task that we do. It is very popular to use technology devices nowadays and it is very easy to reach education resources. We want to develop something defferent according to the different stories we’ve experienced. We offer camps to public and we also demonstrate the spirit and our team while science fair and some festivals.",
                imgPath: require("@/assets/Elements/Home/GroupPhoto.jpg"),
                path: "/Outreach",
            },
        ],
        bottomItems: [
            {
                photo: require("@/assets/Elements/Everywhere-2020 Infinite Recharge.png"),
                text: "FRC2021:Infinite Recharge",
                path: "/2021InfiniteRecharge",
            },
            {
                photo: require("@/assets/2020-2021/elements/robot_squ.jpg"),
                text: "2021 Syzygy",
                path: "",
            },
            {
                photo: require("@/assets/2020-2021/elements/outreach_squ.jpg"),
                text: "Outreach",
                path: "/Outreach",
            },
            {
                photo: require("@/assets/2020-2021/elements/first_squ.jpg"),
                text: "FIRST",
                path: "/FIRST",
            }
        ],        
    }),
    
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 1
          case 'sm': return 1
          case 'md': return 1
          case 'lg': return 3
          case 'xl': return 3
        }
      },
    },

    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.active = window.innerHeight-window.scrollY <= 36 ? true : false;
      },
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
@import "@/assets/scss/home.scss";
</style>