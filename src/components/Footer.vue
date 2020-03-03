<template>
  <v-footer dark padless>
    <v-row>
      <v-col class="text-center my-auto" v-for="(item, index) in items" :key="`footer-${index}`">
        <div style="3vmin; font-weight: bold;">{{ item.title }}</div>
        <hr class="mx-auto mb-5" width="150">
        <div
         v-for="(link, index) in item.links"
         :key="`link-${index}`"
         style="3vmin; font-weight: bold;"
        >
          <router-link class="no-underline white--text" :to="link.path">
            {{ link.name }}
          </router-link>
        </div>
      </v-col>

      <v-col class="text-center my-auto">
        <h2>Contact Us</h2>
        <v-btn v-for="(icon, index) in icons" :key="`icon-${index}`" class="white-text" :href="icon.path" target="_blank" icon>
          <v-icon size="24px">{{ icon.title }}</v-icon>
        </v-btn>
      </v-col>

      <v-col>
        <v-img src="../assets/FIRST_logo.png" class="ma-3" width="130"></v-img>
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
  })
};
</script>

<style>
.no-underline {
  text-decoration: none;
}
</style>