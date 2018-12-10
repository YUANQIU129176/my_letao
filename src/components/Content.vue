<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.content{
    padding-top: 40px;
    padding-bottom: 60px;
    height: 100%;
    // overflow: scroll;
}
</style>
