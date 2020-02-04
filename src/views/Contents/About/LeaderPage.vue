<template>
    <div>
        <v-card 
        class="pa-10 align-content-space-around d-flex flex-wrap justify-center"
        color="#A1A29E"
        height="1500">
            <v-card color="#767774" height="1000" width="1000" class="d-flex flex-column align-center">
                <v-row class="align-center">
                    <h1 class="display-2">Student Team Leaders</h1>
                </v-row>           
                <v-row class="d-flex align-center justify-center ml-12">
                    <v-col 
                     lg="6" md="6" sm="12"
                     v-for="(leaderInfomation, index) in leaderInfomations"
                     :key="index">
                        <h3>{{leaderInfomation.title}}</h3>
                        <div>{{leaderInfomation.name}}</div>
                        <div>{{leaderInfomation.email}}</div>                     
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        leaderInfomations: [
            {
                title: "TEAM LEADER",
                name: "Tung-Lun YANG", 
                email: "protire0821@gmail.com",
            },
            {
                title: "CHIEF EXECUTIVE OFFICER",
                name: "Che-Wei CHANG", 
                email: "benson200338#gmail.com",
            },
            {
                title: "LEADER OF MECHANISM",
                name: "Yu-Hsuan WANG", 
                email: "h710096@nehs.tc.edu.tw",
            },
            {
                title: "CO-LEADER OF MECHANISM",
                name: "Chia-Chien CHEN", 
                email: "bananaaa0203@gmail.com",
            },
            {
                title: "LEADER OF E.E. & PROGRAM",
                name: "Liang-Xiang ZHANG", 
                email: "h710120@nehstc.edu.tw",
            },
            {
                title: "CO-LEADER OF E.E. & PROGRAM",
                name: "Shih-Siang YANG", 
                email: "h710092@nehs.tc.edu.tw",
            },
            {
                title: "LEADER OF STRATEGY & SCOUTING",
                name: "Deng-Jie YANG", 
                email: "h710061@nehs.tc.edu.tw",
            },
            {
                title: "CO-LEADER OF STRATEGY & SCOUTING",
                name: "Kai-Chieh HUANG", 
                email: "h710123@nehs.tc.edu.tw",
            },
            {
                title: "MANAGER OF GENERAL AFFAIRS",
                name: "Yu-Chen TSAI", 
                email: "h710107@nehs.tc.edu.tw",
            },
            {
                title: "CO-MANAGER OF GENERAL AFFAIRS",
                name: "Sen-Huei TONG", 
                email: "h710028@nehs.tc.edu.tw",
            },
        ]
    })
}
</script>