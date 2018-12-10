<template>
<div class="header">
    <mt-header :title="$store.state.title" fixed>
    <router-link
        slot="left"
        to=''
      >
        <mt-button v-show='$route.path!=="/home"' @click="$router.back(-1)">返回</mt-button>
      </router-link>
    <mt-button
      slot="right" @click="$router.push({name:'search'})">搜索</mt-button>
  </mt-header>
</div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
</style>
