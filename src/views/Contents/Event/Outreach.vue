
<template>
    <div>
      <v-img
          aspect-ratio="2"
          src="@/assets/2020-2021/outreach/outreach_main.jpg"
          class="d-flex align-end"
      >
      <h1 class="ml-3 mb-2" style="font-style: italic; font-size: 7vmin;">
          Outreach            
      </h1>
      </v-img>
      
      <div class="box">
        <Timeline
          :timeline-items="timelineItems"
          :message-when-no-items="messageWhenNoItems"/>
      </div>
    </div>
</template>

<script>
export default {
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There will be some item!',
    timelineItems: [
      {
        items: [
           {
            from: new Date(2020, 8, 23),
            title: "Communicate with team 7130",
            description:
              "During the summer vacation, team7130 invited us and team 6998 for technical exchanges and sharing. We briefly introduced our respective teams and exchanged each other's future plans.",
            showDayAndMonth: true
          },
        ]
      }
    ]
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight () {
      // eslint-disable-next-line no-console
      console.log(document.body.clientWidth)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 1
        case 'lg': return 3
        case 'xl': return 3
      }
    },
  },
  methods: {
    changePath(goToPath){
      this.$router.push(goToPath).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>