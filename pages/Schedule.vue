<template>
  <div>
    <Header />
    <section class="container">
      <Menu></Menu>
      <div class="container-content">
        <div :key="key" class="lessons-list" v-for="(value, key) in paginatedData">
            Урок <menu-item :url="'/lessons/' + value.id">"{{value.title}}"</menu-item> начнется
            <Time :time="value.startedAt" />
        </div>
        <button
          :disabled="pageNumber === 0"
          @click="prevPage">
          Previous
        </button>
        <button
          :disabled="pageNumber >= pageCount -1"
          @click="nextPage">
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import WelcomeText from '~/components/WelcomeText.vue'
import Header from '~/components/Header.vue'
import Time from '~/components/Time.vue'
import { mapGetters } from 'vuex';
import MenuItem from "~/components/MenuItem";

export default {
  components: {
    MenuItem,
    Menu,
    WelcomeText,
    Header,
    Time
  },

  data: function() {
    return {
      pageNumber: 0,
      size: 5,
    }
  },

  mounted() {
    this.$store.dispatch('loadLessonsList');
    this.$root.$on('selected', ()=>{
      this.pageNumber = 0;
    })
  },

  methods:{
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  },

  computed: {
    ...mapGetters(['getCurrentCourseId']),

    filterLessons() {
      let filteredLessons = this.$store.state.lessonsList.filter((item) => {
        return item.courseId == this.$store.getters.getCurrentCourseId;
      })
      return filteredLessons;
    },

    pageCount(){
      let l = this.filterLessons.length,
        s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData(){
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.filterLessons
        .slice(start, end);
    }
  },
}
</script>

<style>


</style>
