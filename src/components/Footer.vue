<template>
  <v-footer dark padless>
    <v-row>

      <v-col class="text-center my-auto" v-for="(item, index) in items" :key="index">
        <h2>{{ item.title }}</h2>
        <hr class="mx-auto mb-5" width="150">
        <h3 v-for="link in item.links" :key="link">
          <router-link class="no-underline white--text" :to="link.path">
            {{ link.name }}
          </router-link>
        </h3>
      </v-col>

      <v-col class="text-center my-auto">
        <h2>Contact Us</h2>
        <v-btn v-for="icon in icons" :key="icon" class="white-text" :href="icon.path" target="_blank" icon>
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
            path: "/#7636"
          }
        ]
      },
      {
        title: "SPONSORS",
        links: [
          {
            name: "Our Sponsors",
            path: "/sponsor"
          },
          {
            name: "Community",
            path: ""
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