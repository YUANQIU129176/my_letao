<template>
  <div class="searchList">
    <div class="searchArea">
      <mt-search
        v-model="searchKey"
        cancel-text="取消"
        placeholder="搜索"
      >
      </mt-search>
      <span class="searchBtn">搜索</span>
    </div>
    <div class="lt_sorder">
      <a href="javascript:;">上架时间
        <span class="fa fa-angle-down"></span>
      </a>
      <a href="javascript:;">价格
        <span class="fa fa-angle-down"></span>
      </a>
      <a href="javascript:;">销量
        <span class="fa fa-angle-down"></span>
      </a>
      <a href="javascript:;">折扣
        <span class="fa fa-angle-down"></span>
      </a>
    </div>
    <!-- x下拉刷新 -->
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :autoFill='false'
      ref='loadmore'
    >
    <div class="product clearfix">
      <router-link to='' class="pbox" v-for="item in dataLists" :key=item.id>
        <img :src="'http://127.0.0.1:3000'+item.pic[0].picAddr" alt="">
        <p class="line2">{{item.proName}}</p>
        <div class="price"><span>&yen;{{item.price}}</span><del>&yen;{{item.oldPrice}}</del></div>
        <mt-button type="primary">立即购买</mt-button>
      </router-link>
    </div>
    </mt-loadmore>
  </div>
</template>
<script>
/*
  完成点击列表按钮排序是触发的变化
*/
import {getProductList} from '@/api'
export default {
  data () {
    return {
      searchKey: '',
      allLoaded: false,
      keyval: '',
      page: 1,
      pageSize: 2,
      dataLists: []
    }
  },
  mounted () {
    //   获取传递过来的搜索名字
    this.keyval = this.$route.params.key
    console.log(this.keyval)
    this.init()
  },
  methods: {
    init () {
      getProductList({keyval: this.keyval, page: this.page, pageSize: this.pageSize}).then(res => {
        console.log(res)
        // 赋值
        // 判断是否还有数据 如果没有了 则停止刷新
        if (res.data.length === 0) {
          // 则为全部获取完的事情
          this.allLoaded = true
        }
        // 展开运算符（只向数组后边添加对象 不会影响其他）
        this.dataLists.push(...res.data)
      })
    },
    loadBottom () {
      // 当滑动时 让页数自增
      this.page++
      this.$refs.loadmore.onBottomLoaded()
      // 重新传递数据
      this.init()
    }
  }
}
</script>
<style lang="scss" scoped>
.searchList {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mint-loadmore {
  flex: 1;
  padding-bottom: 60px;
  overflow: scroll;
}
.searchArea {
  position: relative;
  height: 44px;
}
.mint-search {
  position: relative;
  height: auto;
}
.searchBtn {
  width: 60px;
  height: 28px;
  position: absolute;
  right: 5px;
  top: 7px;
  z-index: 997;
  background-color: pink;
  text-align: center;
  line-height: 28px;
  color: #888;
}
.lt_sorder {
  width: 100%;
  display: flex;
  background-color: #ddd;
  margin: 5px 0px;
  > a {
    flex: 1;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    &.active {
      color: red;
    }
  }
}
.product {
  padding: 10px;
  .pbox {
    width: 48%;
    float: left;
    text-align: center;
    color: #888;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px hsla(240, 0, 0, 0.1);
    padding-bottom: 10px;
    margin-top: 10px;
    .line2 {
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 18px;
      font-size: 13px;
    }
    .price {
      padding: 10px 0;
      font-size: 12px;
    }
    img {
      width: 100%;
      display: block;
    }
  }
  .pbox:nth-of-type(even) {
    margin-left: 4%;
  }
}
</style>
