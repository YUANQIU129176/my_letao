<template>
  <div class="category">
    <div class="left">
      <mt-navbar v-model="selected">
        <mt-tab-item
          :id="item.id"
          v-for="item in dataFirst"
          :key='item.id'
        >{{item.categoryName}}</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item
          :id="item.id"
          v-for="item in dataFirst"
          :key="item.id"
        >
          <router-link
            to=''
            v-for="item1 in dataSecond"
            :key="item1.id"
          >
            <img
              :src="'http://127.0.0.1:3000'+item1.brandLogo"
              alt=""
            >
            <h3>{{item1.brandName}}</h3>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- tab-container -->

  </div>
</template>
<script>
import { categoryDataRender, categoryDataId } from '@/api'
export default {
  data () {
    return {
      selected: '',
      dataFirst: [],
      dataSecond: []
    }
  },
  mounted () {
    // 主题
    this.$store.state.title = '商品分类'
    this.selected = 1
    categoryDataRender().then(res => {
      // console.log(res.rows)
      this.dataFirst = res.rows
    })
  },
  // 变化的监听
  watch: {
    selected (value) {
      // console.log(value)
      categoryDataId(value).then(res => {
        // console.log(res.rows)
        this.dataSecond = res.rows
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.category {
  height: 100%;
  display: flex;
  .left {
    border-right: 1px solid #ccc;
    .mint-navbar {
      flex-direction: column;
      width: 100px;
    }
  }
  .right{
    flex: 1
  }
}
</style>
