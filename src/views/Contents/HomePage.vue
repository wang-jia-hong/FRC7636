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
        class="pa-10 align-content-space-around flex-wrap d-flex justify-center"
        color="#A1A29E"
        height="1400">
            <v-card color="#8f8f8f" height="220" class=" d-flex align-center">
                <v-row>
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                    
                    <v-col>
                        <h1>NEHS @ CTSP</h1>
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </v-col>
                </v-row>

            </v-card>
            <v-card color="#767774" height="650" class=" d-flex flex-column align-center">

                <v-row>
                    <v-col>
                        <h1>About US</h1>
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </v-col>
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                     
                </v-row>
                <hr color="#8f8f8f" class="mx-auto mb-5" width="450">
                <v-row>
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img src="../../assets/Elements/Home/Home-CTSP.png" width="140">
                    </v-col>                    
                    <v-col>
                        <h1 class="text-right">FRC 2019</h1>
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </v-col>
                </v-row>
                <hr color="#8f8f8f" class="mx-auto mb-5" width="450">
                <v-row>
                    <v-col>
                        <h1>Outreach</h1>
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </v-col>
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img src="HomePage/Logo7636.jpg" justify-lg-space-around width="140">
                    </v-col>                     
                </v-row>
            </v-card>
            <div>
                <hr color="#000" class="mx-auto mb-5" width="450">
                <div color="#a1a29e" class="pa-10 align-content-space-around flex-wrap d-flex justify-center">
                    <v-row>
                        <v-col
                         cols="3"
                         v-for="(bottomItem, index) in bottomItems"
                         :key="index"
                        >
                                <img :src="bottomItem.photo" width="220">
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