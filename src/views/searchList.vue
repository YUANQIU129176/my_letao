<template>
    <div class="searchList">
        {{$route.params.key}}
   </div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$route.params.key)
  }
}
</script>
<style lang="scss" scoped>

</style>
