<template>
  <div>
    <Header />
    <section class="container">
      <Menu></Menu>
      <div class="container-content">
        <h1>{{ lessonTitle }}</h1>
            Урок начнется
            <Time :time="lessonTime" />
        <div>
          <menu-item :url="'/lessons/tests/' + $route.params.id">Тесты</menu-item>
          <menu-item :url="'/lessons/stat/' + $route.params.id">Статистика</menu-item>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import MenuItem from "~/components/MenuItem";
import WelcomeText from '~/components/WelcomeText.vue'
import Header from '~/components/Header.vue'
import Time from '~/components/Time.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    Menu,
    MenuItem,
    WelcomeText,
    Header,
    Time
  },

  mounted() {
    this.$store.dispatch('loadLessonsList');
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
    ...mapGetters(['getCurrentCourseId']),

    lessonTitle: function () {
       return this.getLessonInfo().title;
    },

    lessonTime: function () {
      return this.getLessonInfo().startedAt;
    },

  },
}
</script>
