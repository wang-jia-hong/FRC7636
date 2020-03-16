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
            <v-row justify="center">
                <v-expansion-panels inset focusable>
                <v-expansion-panel
                    v-for="(resource, index) in resources"
                    :key="index"
                    style="background: #a3a3a3; color: white"
                >
                    <v-expansion-panel-header>{{resource.name}}</v-expansion-panel-header>
                    <v-expansion-panel-content class="mt-6">
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