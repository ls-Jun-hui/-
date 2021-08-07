// 1 定义 要使用的url 
let homeSwiperData = "/home/swiperdata";
let HomeCatitems = "/home/catitems";
let contentdata = "/home/floordata";
let categories = "/categories";


const install = (Vue, vm) => {

  // 2 定义获取首页轮播图的函数
  let GETHOMESWIPERDATA = (params = {}) => vm.$u.get(homeSwiperData, params);
  let GETHOMECATITEMS = (params = {}) => vm.$u.get(HomeCatitems, params);
  let GETCONTENTDATA = (params = {}) => vm.$u.get(contentdata, params);
  let GETCATEGORY = (params = {}) => vm.$u.get(categories, params);

  // 3 添加 vm.$u.api 对象上
  vm.$u.api = { GETHOMESWIPERDATA,GETHOMECATITEMS,GETCONTENTDATA,GETCATEGORY };
}

export default {
  install
}