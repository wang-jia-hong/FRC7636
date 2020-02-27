<template>
    <div>
        <v-img
        aspect-ratio="2"
        src=""
        >
        </v-img>
        <div class="pa-10" style="background-color: #fafafa">
            <v-row>
                <v-col
                     lg="6"
                     md="6"
                     sm="12"
                     class="text-center my-8 pa-6"
                     v-for="(contact, index) in contacts" :key="index"
                 >
                    <div class="size" style="color: black;">
                        {{contact.name}}: <br>
                        {{contact.method}}
                    </div>
                </v-col>
                <v-col
                     lg="6"
                     md="6"
                     sm="12"
                     class="text-center my-8 pa-6"
                     
                 >
                    <v-row>
                        <v-col cols="3" v-for="(icon, index) in icons" :key="index">
                            <v-btn :href="icon.path" target="_blank" icon>
                                <v-icon size="15vmin" color="black">{{ icon.title }}</v-icon>
                            </v-btn>                            
                        </v-col>                        
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        contacts:[
            {
                name: "Tel",
                method: " +886 4 2568 6850",
            },
            {
                name: "WorkShop",
                method: "No. 227, Pinghe Road, Daya District, Taichung City, 428",
            },
            {
                name: "Email",
                method: "frc7636@nehs.tc.edu.tw",
            },
        ],
        icons: [
            {
                title: "mdi-facebook",
                path: "https://www.facebook.com/7636.Robomania" 
            },
            {
                title: "mdi-youtube",
                path: "https://www.youtube.com/channel/UCXFLKnRlpTNMn2aaLVM9H6g"         
            },
            {
                title: "mdi-instagram",
                path: "https://www.instagram.com/frc7636_robomania/"        
            },
            {
                title: "mdi-email",
                path: ""       
            },
        ],
    }),
}
</script>
<style >
    .size{
        font-size: 6vmin;
    }
</style>