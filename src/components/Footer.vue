<template>
  <v-footer dark padless>
    <v-row class="mt-5">
      <v-col cols="12" md="3" class="d-flex justify-center">
        <img class="mb-5" src="../assets/FIRST_logo.png" style="width: 120px;">
      </v-col>

      <v-col cols="12" md="2" class="text-center my-auto mb-5" v-for="(item, index) in items" :key="`footer-${index}`">
        <div style="font-weight: bold;">{{ item.title }}</div>
        <hr class="mx-auto mb-4" width="150">
        <div
         v-for="(link, index) in item.links"
         :key="`link-${index}`"
         style="font-weight: bold;"
        >
          <router-link class="no-underline white--text" :to="link.path">
            {{ link.name }}
          </router-link>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="text-center my-auto">
        <div class="mb-" style="font-weight: bold;">Contact Us</div>
        <v-btn v-for="(icon, index) in icons" :key="`icon-${index}`" class="white-text" :href="icon.path" target="_blank" icon>
          <v-icon size="24px">{{ icon.title }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
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
    items: [
      {
        title: "About",
        links: [
          {
            name: "FIRST",
            path: "/FIRST"
          },
          {
            name: "Team #7636",
            path: "/Team 7636"
          }
        ]
      },
      {
        title: "OUTREACH",
        links: [
          {
            name: "Outreach",
            path: "/Outreach"
          },
          {
            name: "Our Sponsors",
            path: "/sponsor"
          }
        ]
      },
      {
        title: "MEMBERS",
        links: [
          {
            name: "Mentors",
            path: "/Mentor"
          },
          {
            name: "Leaders",
            path: "/Leader"
          }
        ]
      }
    ]
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 100
        case 'sm': return 100
        case 'md': return 100
        case 'lg': return 200
        case 'xl': return 200
      }
    },
  },
};
</script>

<style>
.no-underline {
  text-decoration: none;
}
</style>