<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="../../../assets/Elements/Events/Events-Past seasons.jpeg"
        >
        </v-img>
         <v-card 
        class="pa-10 align-content-space-around flex-wrap d-flex justify-center"
        color="#A1A29E"
        height="800">
            <v-card color="#8f8f8f" height="600" class=" d-flex flex-column align-center">
                <v-row @click="changePath('/past-seasons/2019DeepSpace')">
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img height="250" src="../../../assets/Elements/Everywhere-2020 Infinite Recharge.png" :ripple="true">
                    </v-col>                   
                    <v-col>
                        <h1>FRC 2020: Infinite Recharge</h1>
                        <div>Powered by the great sponsorer, STAR WARS, our mission this year is to protect the FIRST city from being attacked. We use limited resources to built our second robot. We aim to strike both Science Park Taiwan Regional and Silicon Valley Regional and go to our final goal, Detroit Championship. We are confidential that we will do a lot better this season.</div>
                    </v-col>
                </v-row>
                <hr color="#000" class="mx-auto mb-5" width="450">
                <v-row @click="changePath('/past-seasons/2019DeepSpace')">
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img height="250" src="../../../assets/Elements/Everywhere-2019 Deep Space.png">
                    </v-col>                   
                    <v-col>
                        <h1>FRC 2019: Deep Space</h1>
                        <div>Sponsored by the aircraft mega company, BOEING, and with the view to explore the unknown space in the future, our theme this year, Deep Space, is looking forward to load and transport the resources to our space craft. Our robot and strategy had changed through the season, and our first robot, Charlie’s Comet had done a great job .</div>
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
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