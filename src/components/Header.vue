<template>
  <div>
      <v-card color="#002a5c">
        <v-row>
          <v-col lg="3" md="3" sm="12" class="text-center">
            <img class="" src="../assets/Logo7636.jpg" height="170">            
          </v-col>
          <v-col>
            <div class="display-2 text-center mt-10 mb-8">
              <strong>FRC #7636 Robomania</strong>
            </div>
            <Toolbar></Toolbar>
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