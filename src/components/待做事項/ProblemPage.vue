<template>
  <div>
    <v-card
      v-for="(question, index) in questions"
      :key="index"
      class="mx-auto"
      max-width="344"
      outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{ question.title }}</v-list-item-title>
        <v-radio-group v-model="question.user_answer" column >
          <v-radio :label="radio" :value="radio" v-for="(radio, radio_index) in question.radio_options" :key="`radio${radio_index}`"></v-radio>
        </v-radio-group>
      </v-list-item-content>

    </v-list-item>
  </v-card>
  </div>
</template>

<script>
import questions from "@/components/problem.json";

export default {
  data() {
    return {
      questions: questions.questions
    };
  },
  methods: {
    
  }
}
</script>