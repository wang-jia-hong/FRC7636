<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      color="#02295c"
      class="col-12 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 ">
        Text Right Here
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-youtube',
        'mdi-instagram',
        'mdi-email'
      ],
    }),
  }
</script>