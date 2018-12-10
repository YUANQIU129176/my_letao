<template>
  <div class="search">
    <mt-search
      v-model="searchKey"
      cancel-text="取消"
      placeholder="搜索"
    >
    </mt-search>
    <span class="searchBtn" @click="searchAllKey">搜索</span>
    <mt-cell :title="item" :to='"searchList/"+item' v-for="(item, index) in localValue" :key="index">
    <span @click.stop.prevent="delSearchKey(index)">X</span>
    </mt-cell>
  </div>
</template>
<script>

/*
    1 完成搜索框关键字的功能（当点击搜索是触发）
    2 输入一个数据值 然后存储在本地存储中（注意这是一个字符串形式的数组）
    3 当点击搜索是现寻找local中有没有之前就存在的值 然后再实现跳转到对应的页面上

*/
export default {
  data () {
    return {
      searchKey: '',
      localValue: []
    }
  },
  mounted () {
    this.localValue = this.getlocalValue()
  },
  methods: {
    getlocalValue () {
    // 1 获取原本就存在本地储存中的值
      var value = localStorage.getItem('localValue')
      // 2 转换成数组的形式
      return JSON.parse(value || '[]')
    },
    // 实现搜索的功能
    searchAllKey () {
    // 把要搜索的关键字扣存储在本地 然后再实现跳转
    // 1 用户搜索的关键字纯在数组中
      this.localValue.push(this.searchKey)
      // 2 把数据存在本地存储当中
      localStorage.setItem('localValue', JSON.stringify(this.localValue))
      // 3 实现跳转到searchList
      this.$router.push({path: `/searchList/${this.searchKey}`})
    },
    // 删除关键字 注意删除关键字搜索是会触发毛包和点透事件
    delSearchKey (index) {
      // console.log(index)
      // 1 删除对应的数组对象
      this.localValue.splice(index, 1)
      // 2 更新本地存储
      localStorage.setItem('localValue', JSON.stringify(this.localValue))
    }
  }

}
</script>
<style lang="scss" scoped>
.mint-search{
    position: relative;
    height: auto;
}
.searchBtn{
    width: 60px;
    height: 28px;
    position: absolute;
    right: 5px;
    top: 48px;
    z-index: 998;
    background-color: pink;
    text-align: center;
    line-height: 28px;
    color: #888;
}
</style>
