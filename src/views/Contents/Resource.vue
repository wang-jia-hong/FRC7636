<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="@/assets/Elements/FrontIMG/Resource.jpg"
        class="align-center"
        >
            <h1 class="text-center" style="color: white; font-size: 9vmin; font-weight: bold;">
                Resource            
            </h1>
        </v-img>
        <div class="py-10" style="background-color: #fafafa">
            <v-row justify="center" style="">
                <v-expansion-panels accordion>
                <v-expansion-panel
                    v-for="(resource, index) in resources"
                    :key="index"
                >
                    <v-expansion-panel-header>{{resource.name}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{resource.content}}
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        resources:[
            {
                name: "Document",
                content: "Here will have docoment very soon",
            },
            {
                name: "CAD",
                content: "Here will have CAD very soon",
            },
            {
                name: "Video",
                content: "Here will have video very soon",
            },
        ]
    }),
}
</script>