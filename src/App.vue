<template>
  <div id="app">
    <lt-header></lt-header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    'lt-header': Header
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
