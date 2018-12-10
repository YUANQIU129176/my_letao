<template>
  <div class="view-content">
    <!-- 轮播图 -->
    <div class="banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <router-link
            to=''
            class="imgs"
          >
            <img
              src="@/assets/images/banner1.png"
              alt="这是一张图片"
            >
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link
            to=''
            class="imgs"
          >
            <img
              src="@/assets/images/banner2.png"
              alt="这是一张图片"
            >
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link
            to=''
            class="imgs"
          >
            <img
              src="@/assets/images/banner3.png"
              alt="这是一张图片"
            >
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link
            to=''
            class="imgs"
          >
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

    <!-- 导航 -->
    <div class="nav">
      <router-link to=''>
        <img
          src="@/assets/images/nav1.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="@/assets/images/nav2.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="@/assets/images/nav3.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="@/assets/images/nav4.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="@/assets/images/nav5.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="@/assets/images/nav4.png"
          alt=""
        >
      </router-link>
    </div>
    <!-- 商品页面 -->
    <div class="goods">
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
      <div class="content">
        <div class="ico">
          <router-link to=''>
            <img
              src="@/assets/images/product.jpg"
              alt=""
            >
          </router-link>
        </div>
        <div class="doc">安踏运动鞋好啊好啊好啊哦好啊撒好啊好啊哦好啊撒大大萨达萨达飒飒大撒大撒大撒大撒</div>
        <div class="price"><span>￥3033</span><del>￥8080</del></div>
        <div class="btn">
        <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.$store.state.title = '乐淘商城购物'
  }
}
</script>
<style lang='scss' scoped>
div.view-content {
  width: 100%;
  height: 100%;
}
.banner {
  height: 200px;
  width: 100%;
  .imgs {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
}

.nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  a {
    width: 33.33%;
    img {
      width: 100%;
    }
  }
}
//   商品部分
.goods {
  padding: 7px;
  // padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .content {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 1px 1px hsla(240,0,0,0.1);
    width: 48%;
    .ico {
      a {
        img {
          width: 100%;
        }
      }
    }
    .doc{
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 18px;
      font-size: 13px;
      color: #666;
    }
    .price{
      text-align: center;
      span{
      padding: 10px 0;
      font-size: 16px;
      color:red;
      }
      del{
        color: #666;
      }
    }
    .btn{
      padding: 8px;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
