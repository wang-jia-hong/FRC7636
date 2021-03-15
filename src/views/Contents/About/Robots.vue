<template>
    <div>
        <v-img
        aspect-ratio="2"
        src=""
        >
        </v-img>
        <div class="box">
            <div style="background-color: #a2a2a2" class="mx-auto">
                Robots
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        robots:[
            {
                name: "Charlie's Comet",
                year:2019
                description: "",
                image: '@/assets/Elements/About/Robots/2019/CharliesComet1.png',
            },
            {
                name: "Syzygy",
                year:2020
                description: "",
                image: '@/assets/Elements/About/Robots/2020/Syzygy.png',
            },
            {
                name: "Work in progress...",
                year: 2021
                description: "",
                image: '',
            },
        ]
    }),
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/about.scss";
</style>
