<template>
  <div>
    <Header />
    <section class="container">
      <Menu></Menu>
      <div class="container-content">
        <h1>Здесь будет статистика урока "{{lessonTitle}}"</h1>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import MenuItem from "~/components/MenuItem";
import Header from '~/components/Header.vue'

export default {
  components: {
    Menu,
    MenuItem,
    Header,
  },

  mounted() {
    this.getLessonInfo();
  },

  methods: {
    getLessonInfo: function () {
      let lessonId = this.$route.params.id;
      let lesson = this.$store.state.lessonsList.filter((item,index) => {
        return item.id === lessonId;
      })
      return lesson[0];
    },
  },

  computed: {
    lessonTitle: function () {
      return this.getLessonInfo().title;
    },
  },
}
</script>

<style>


</style>
