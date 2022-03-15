<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="@/assets/Elements/FrontIMG/Sponsor header.jpg"
        class="align-center"
        >
            <div class="textInImg">
                Sponsors
            </div>
        </v-img>

        <div class="box">
            <div>
                <v-row class="justify-center align-center">
                    <v-col
                     lg="6"
                     md="6"
                     sm="12"
                     class="text-center pt-10 my-8 pa-6"
                     v-for="(sponsor, index) in sponsors" :key="index"
                    >
                        <a :href="sponsor.path" :title="sponsor.title">
                            <img :src="sponsor.logo" class="sponsorsLogo">
                        </a>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        sponsors:[
            {
                logo: require("@/assets/Elements/Sponsor/CTSP.png"),
                path: "https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1",
                title:"中部科學園區",
            },
            {
                logo: require("@/assets/Elements/Sponsor/NEHSCTSP.png"),
                path: "http://www.nehs.tc.edu.tw/index.php",
                title:"中科實驗中學",
            },
            {
                logo: require("@/assets/Elements/Sponsor/NEXCOBOT.png"),
                path: "http://www.nexcobot.com/",
                title:"NexCOBOT",
            },
            {
                logo: require("@/assets/Elements/Sponsor/IGUS.png"),
                path: "https://www.igus.com.tw/",
                title:"igus",
                
            },
            {
                logo: require("@/assets/Elements/Sponsor/NEXCOM.png"),
                path: "http://www.nexcom.com/?from=m",
                title:"NEXCOM",
            },
            {
                logo: require("@/assets/Elements/Sponsor/大雅廚具 logo.jpg"),
                path: "http://www.tayakitchen.com.tw/tw/index.php",
                title:"大雅廚具",
            },
            {
                logo: require("@/assets/Elements/Sponsor/YangChangRMBG.png"),
                path: "https://goo.gl/maps/an1Cj9rWseSM2Avg7",
                title:"振洋精機廠",
            },
            {
                logo: require("@/assets/Elements/Sponsor/銓貫logo.png"),
                path: "https://goo.gl/maps/AePgwFaG12uWgauH6",
                title:"銓貫實業",
            },
            {
                logo: require("@/assets/Elements/Sponsor/特典.png"),
                path: "https://goo.gl/maps/M5F2P4qvvb7414Ye9",
                title:"特典工具"
            },
        ]
    }),
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/sponsors.scss";
</style>