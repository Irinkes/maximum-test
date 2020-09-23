<template>
  <select class="course__select" v-model="selected" @change="setCourse">
    <option :key="key" :value="value.id" v-for="(value, key) in this.$store.state.coursesList">
      {{value.name}}
    </option>
  </select>
</template>

<script>

export default {
  data: function() {
    return {
        selected: '1'
    }
  },

  mounted() {
    this.$store.dispatch('loadCoursesList');
  },

  methods: {
    setCourse() {
      this.$store.commit('chooseCurrentCourse', this.selected);
      this.$root.$emit('selected');
    },
  }
}

</script>


