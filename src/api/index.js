// 默认地址
import axios from 'axios'
var baseUrl = 'http://127.0.0.1:3000/'
axios.defaults.baseURL = baseUrl

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
