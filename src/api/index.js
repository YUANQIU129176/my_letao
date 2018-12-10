// 默认地址
import axios from 'axios'
const baseURL = 'http://127.0.0.1:3000/'

axios.defaults.baseURL = baseURL

// 创建接口方法 一级
export const categoryDataRender = () => {
  return axios.get('/category/queryTopCategory').then((result) => {
    return result.data
  })
}

// 二级商品接口
export const categoryDataId = (id) => {
  return axios.get('/category/querySecondCategory', {params: {id: id}}).then((result) => {
    return result.data
  })
}

/// 获取商品的搜索列表
export const getProductList = (pa) => {
  return axios.get('/product/queryProduct', {params: pa})
    .then(result => {
      return result.data
    })
}
