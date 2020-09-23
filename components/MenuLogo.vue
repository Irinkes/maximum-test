<template>
  <menu-item :url="'/'" class="logo__link">
    <div class="logo">Maximum Logo</div>
  </menu-item>
</template>


<script>
import MenuItem from "~/components/MenuItem";

export default {
  components: {
    MenuItem,
  },
}
</script>
