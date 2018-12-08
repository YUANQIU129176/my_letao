<template>
  <div class="footer">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1">
        <div
          slot='icon'
          class="fa fa-home"
        ></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <div
          slot='icon'
          class="fa fa-bars"
        ></div>
        分类
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <div
          slot='icon'
          class="fa fa-shopping-cart"
        ></div>

        购物车
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <div
          slot='icon'
          class="fa fa-bars"
        ></div>
        会员中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
