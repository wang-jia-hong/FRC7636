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
                    <v-btn :href="icon.path" target="_blank" icon>
                        Grabcad
                    </v-btn>
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
                path: "",
            },
            {
                name: "CAD",
                content: "Here will have CAD very soon",
                path: "https://workbench.grabcad.com/workbench/projects/gcFCUvE30irQJF9zINyaG700-59XvjSlETyPKP0pXtyOKE#/space/gca7Hg4kUZGLPHRQUQ4WU5RoRx2ANhhlRO8Qvgbf4TVt9q",
            },
            {
                name: "Video",
                content: "Here will have video very soon",
                path: "",
            },
        ]
    }),
}
</script>