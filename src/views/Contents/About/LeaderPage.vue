<template>
        <div class="pa-10" style="background-color: #cbcbcb">
            <div style="background-color: #a2a2a2" class="mx-auto">
                <h1 class="display-2 text-center py-5">Student Team Leaders</h1>
                <v-row no-gutters>
                    <v-col 
                     lg="6"
                     md="6"
                     sm="12"
                     v-for="(leaderInfomation, index) in leaderInfomations"
                     :key="index"
                     class="text-center my-8"
                    >
                        <h3>
                            {{ leaderInfomation.title }}
                        </h3>
                        <hr style="width: 60%" class="mx-auto mb-2">
                        <div>
                            {{ leaderInfomation.name }}
                        </div>
                        <div>
                            {{ leaderInfomation.email }}
                        </div>                  
                    </v-col>
                </v-row>
            </div>
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