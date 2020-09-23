<template>
  <div class="header">
    <menu-logo></menu-logo>
    <course-select></course-select>
  </div>
</template>

<script>
import MenuLogo from '~/components/MenuLogo.vue'
import CourseSelect from "@/components/CourseSelect";

export default {
  components: {
    CourseSelect,
    MenuLogo
  },
}

</script>


