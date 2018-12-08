<template>
  <div id="app">
    <lt-header></lt-header>
    <It-content></It-content>
    <It-footer></It-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Content from '@/components/Content.vue'
export default {
  components: {
    'lt-header': Header,
    'It-footer': Footer,
    'It-content': Content
  },
  name: 'App',
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
