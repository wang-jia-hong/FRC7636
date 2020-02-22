<template>
        <div class="pa-10" style="background-color: #fafafa">
            <div style="background-color: #a2a2a2" class="mx-auto">
                <h1 class="display-2 text-center py-5">Student Team Mentors</h1>
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
                title: "",
                name: "", 
                email: "",
            },
            {
                title: "",
                name: "", 
                email: "",
            },
            {
                title: "",
                name: "", 
                email: "",
            },
            {
                title: "",
                name: "", 
                email: "",
            },

        ]
    })
}
</script>