<template>
  <view class="index">
    <!-- 搜索框 -->
    <YgSearch></YgSearch>
    <!-- 轮播图 -->
    	<u-swiper :height="340" :list="seiperdata"></u-swiper>
      <!-- 导航栏 --> 
      <view class="navigation">
        <view v-for="(item,index) in HomeCatitems" :key="index">
        <image class="navigationImg" :src="item.image_src"></image>
      </view>
      </view>
      <!-- content服装列表 -->
      <view v-for="(i,index) in contentdata" :key="index" class="content">
        <image class="contentImg" :src="i.floor_title.image_src"></image>
        <view class="content2">
           <view class="left">
           <image :src="i.product_list[0].image_src"></image>
         </view>
         <view class="rigth">
           <image  v-for="(list,index) in i.product_list.slice(1)" :key="index" :src="list.image_src"></image>
         </view>
        </view>
       </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      seiperdata:[], //轮播图
      HomeCatitems:[], //导航
      contentdata:[] //图片内容
    }
  },
  async onLoad() {
 this.getHomeSwiperData()
 this.getHomeCatitems()
 this.getcontentdata()
  },
  methods:{
    // 轮播图数据
    async getHomeSwiperData(){
    const res = await this.$u.api.GETHOMESWIPERDATA();
    // const [err,res]=await uni.request({
    //       url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    //     });
        this.seiperdata=res.message.map((v)=>({
          ...v,image:v.image_src,
        }))
    },
    //导航
    async getHomeCatitems(){
    const res = await this.$u.api.GETHOMECATITEMS();
    this.HomeCatitems=res.message
    },
     //图片内容
     async getcontentdata(){
    const res = await this.$u.api.GETCONTENTDATA();
    this.contentdata=res.message
     }


  }
   
  
};
</script>

<style lang="scss">
.navigation{
  display: flex;
justify-content: space-around;
padding-top: 12rpx;
.navigationImg{
  width: 128rpx;
  height: 140rpx;
}
}


.content{
  padding-top: 45rpx;
  margin: 0 0 0 10rpx;
  
  .contentImg{
  width: 750rpx;
  height: 59rpx;
}
.left{
  display: flex;
  margin-right: 15rpx;
 image{
    width: 228rpx;
    height: 386rpx;
 }
}
.rigth{
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  image{
    width: 230rpx;
    height: 188rpx;
    padding: 0 15rpx 0 0;
  }
}
.content2{
  display: flex;
}
}



</style>