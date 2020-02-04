<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="../../assets/FrontIMG/FrontIMGTest.jpg"
        >
            <div class="display-2 text-left">
                FRC ＃７６３６ <br> Robomania            
            </div>
        </v-img>
        
        <v-card 
        class="pa-10 align-content-space-around d-flex flex-wrap justify-center"
        color="#A1A29E"
        height="2800">
            <v-card color="#8f8f8f" height="430" width="1000" class="d-flex align-center">
                <v-row>
                    <v-col lg="3" md="3" sm="12" class="d-flex align-center justify-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                    
                    <v-col>
                        <div class="display-3 font-weight-black"> NEHS @ CTSP</div>
                        <br>
                        <div class=" display-1"> FRC #7636 Robomania is made up by students study in National Experiemental High School at Central Taiwan Science Park. </div>
                    </v-col>
                </v-row>

            </v-card>
            <v-card color="#767774" height="1500" width="1000" class="d-flex flex-column ">
                <v-row>
                    <v-col>
                        <div class="display-3 font-weight-black"> About US </div>
                        <br>
                        <div class=" headline">We’re Robomania from Taiwan. Our team is a group of students who are passionate about robots and spare no effort to pursue our dreams. Year 2019 is our Rookie year in the field of FIRST, and we’ve gained a lot through the season. We are looking forward to improve in 2020 and share what we have to the society.</div>
                    </v-col>
                    <v-col  lg="3" md="3" sm="12" class="d-flex align-center justify-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                     
                </v-row>
                <hr color="#8f8f8f" class="mx-auto mb-5" width="550">
                <v-row>
                    <v-col lg="3" md="3" sm="12" class="d-flex align-center justify-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                    
                    <v-col>
                        <h1 class="display-3 font-weight-black text-right">FRC 2019</h1>
                        <div class=" display-1">We’ve been participating in the Southern Cross Regional Competition located in NSW of Australia in our rookie year, 2019. We’ve gained a lot through the pass season. Our robot, Charlie’s Comet, had been upgraded and improved through the CTSP Pre-competition and the CTSP off season competition.</div>
                    </v-col>
                </v-row>
                <hr color="#8f8f8f" class="mx-auto mb-5" width="550">
                <v-row>
                    <v-col>
                        <h1 class="display-3 font-weight-black">Outreach</h1>
                        <div class=" display-1">Outreach program is one of the most important task that we do. It is very popular to use technology devices nowadays and it is very easy to reach education resources. We want to develop something defferent according to the different stories we’ve experienced. We offer camps to public and we also demonstrate the spirit and our team while science fair and some festivals.</div>
                    </v-col>
                    <v-col  lg="3" md="3" sm="12" class="d-flex align-center justify-center">
                        <img src="HomePage/Logo7636.jpg" justify-lg-space-around width="140">
                    </v-col>                     
                </v-row>
            </v-card>
            <div>
                <hr color="#000" class="mx-auto mb-5" width="450">
                <div color="#a1a29e" class="justify-space-around">
                    <v-row >
                        <v-col
                         cols="3"
                         v-for="(bottomItem, index) in bottomItems"
                         :key="index"
                         class=" text-center"
                        >
                                <img :src="bottomItem.photo" width="80%">
                                <div class="text-center"> {{bottomItem.text}} </div>
                        </v-col>                  
                    </v-row>
                </div>
                <hr color="#000" class="mx-auto mb-5" width="450">                
            </div>

        </v-card>
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
        ]
    })
}
</script>