<template>
  <div>
    <Header />
    <section class="container">
      <Menu></Menu>
      <div class="container-content">
        <WelcomeText></WelcomeText>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import WelcomeText from '~/components/WelcomeText.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Menu,
	  WelcomeText,
    Header
  }
}
</script>

