<template>
  <span>
    {{getFormattedDate}}
    в
    {{getFormattedTime}}
  </span>
</template>

<script>
import Menu from '~/components/Menu.vue';
import WelcomeText from '~/components/WelcomeText.vue'
import Header from '~/components/Header.vue'
import { mapGetters } from 'vuex';

export default {
  props: ['time'],
  components: {
    Menu,
    WelcomeText,
    Header
  },

  mounted() {
    this.$store.dispatch('loadLessonsList');
  },

  computed: {
    ...mapGetters(['getCurrentCourseId']),
    getFormattedDate: function () {
      return new Date(+this.time).toLocaleDateString('ru-RU');
    },
    getFormattedTime: function () {
      return new Date(+this.time).toLocaleTimeString('ru-RU');
    },
  },
}
</script>

<style>


</style>
