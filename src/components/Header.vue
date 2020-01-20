<template>
  <div>
      <v-card color="#002a5c">
        <v-row>
          <v-col cols="3">
            <img class="pl-3" src="../assets/Logo7636.jpg" height="170">            
          </v-col>
          <v-col>
            <div class="display-2 mt-10 mb-8"> <strong> FRC #7636 Robomania </strong></div>          
            <Toolbar class="mr-2"></Toolbar>
          </v-col>
        </v-row>
      </v-card>
  </div>
</template>

<script>
import Toolbar from './ToolBar.vue';

export default {
    components: {
      Toolbar,
    },
  }
</script>