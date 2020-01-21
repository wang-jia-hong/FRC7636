四季紅, [19.01.20 17:17]
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
        <v-btn v-for="icon in icons" :key="icon" class="white-text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
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
    icons: ["mdi-facebook", "mdi-youtube", "mdi-instagram", "mdi-email"],
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