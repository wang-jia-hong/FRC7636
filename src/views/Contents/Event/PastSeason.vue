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
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </v-col>
                </v-row>
                <hr color="#000" class="mx-auto mb-5" width="450">
                <v-row @click="changePath('/past-seasons/2019DeepSpace')">
                    <v-col lg="3" md="3" sm="12" class="text-center">
                        <img height="250" src="../../../assets/Elements/Everywhere-2019 Deep Space.png">
                    </v-col>                   
                    <v-col>
                        <h1>FRC 2019: Deep Space</h1>
                        <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
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