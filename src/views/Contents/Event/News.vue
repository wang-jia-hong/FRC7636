<template>
    <div>
        <v-img
            aspect-ratio="2"
            src=""
            class="d-flex align-end"
        >
            <h1 class="ml-3 mb-2">
                News & <br /> Upcoming Events            
            </h1>
        </v-img>
        <v-card 
        class="pa-10"
        color="#A1A29E"
        height="1000">

            <div>
                <h1> Upcoming Events </h1>
                <hr color="#002a5c" style="width:20%; height: 8px;">

                <div>
                    <div v-for="(upcomingEvent, index) in upcomingEvents" :key="index">
                        <img :src="upcomingEvent.imgPath" width="140">
                        <h2> {{upcomingEvent.title}} </h2>
                    </div>
                </div>
            </div>

            <div>
                <h1> News </h1>
                <hr color="#002a5c" style="width:20%; height: 8px;">
                <div>
                    <div>
                        <img src="" width="140">
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
data: ()=> ({
        upcomingEvents: [
            {
                imgPath: "",
                title: "2020 Science Park Taichung Regional Competition",
            },
            {
                imgPath: "",
                title: "2020 Silicon Valley Regional Competition",
            },
        ],
        News: [
            {
                imgPath: "",
                title: "2020 Build Season",
            },
            {
                imgPath: "",
                title: "2019 Maker Festival",
            },
        ],
    }),
}
</script>