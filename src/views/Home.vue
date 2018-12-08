<template>
  <div class="view-content">
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <router-link to='' class="imgs">
          <img
            src="@/assets/images/banner1.png"
            alt="这是一张图片"
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to='' class="imgs">
          <img
            src="@/assets/images/banner2.png"
            alt="这是一张图片"
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to='' class="imgs">
          <img
            src="@/assets/images/banner3.png"
            alt="这是一张图片"
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to='' class="imgs">
          <img
            src="@/assets/images/banner4.png"
            alt="这是一张图片"
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="@/assets/images/banner5.png"
            alt="这是一张图片"
          >
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
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
.view-content{
    height: 200px;
    width: 100%;
    .imgs{
        height: 100%;
        width: 100%;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>
