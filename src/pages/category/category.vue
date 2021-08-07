<template>
  <view class="category">
    <YgSearch></YgSearch>
    <view class="mani">
      <!-- 左侧数  -->
     <view class="menu" >
      <view :class="['menu-item',index===currentIndex?'active':'']"  @tap="onMenuTap(index)" class="column" v-for="(item,index) in menu" :key="item">
         <view >
           {{item}}
         </view>
      </view>
     </view>
     <!-- 右侧数据 -->
      <view class="content"  >
        <view class="left" v-for="item in goods" :key="item">
          <view class="group">
          {{item.cat_name}}
        </view>
        <view class="content_IMG" >
          <navigator url="" @skiptap="skip(index)" v-for="(iten1,index) in item.children" :key="index">
            <image src="iten1.cat_icon"></image>
            <view>{{iten1.cat_name}}</view>
          </navigator>
        </view>
        </view>
        
      </view>
    </view>
  </view>
</template>

<script>
let message=[]
export default {
  data () {
    return {
        menu:[], //左侧数据
        goods:[],//右側數據
        // 菜單選中的索引
        currentIndex:0
    }
  },
 async onLoad(){
    const res = await this.$u.api.GETCATEGORY()
    message=res.message;
     this.menu=message.map(v=>v.cat_name)
    //  console.log(this.goods);
     this.goods=message[0].children
     console.log(this.goods);
  },
  methods:{
    // 側邊欄點擊事件
    onMenuTap(index){
      this.currentIndex=index
      this.goods=message[index].children
    },
    // 右側商品列表跳轉
  }
}
</script>

<style lang="scss">
.category{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .mani{
    display: flex;
    flex: 1;
    overflow: hidden;
     .active {
        border-left: 3rpx solid #eb4450;
        color: #eb4450;
      }
    .menu{
      width: 182rpx;
      overflow: auto;
        background-color: #F3F3F3;
      .column{
        margin-top: 27rpx;
        view{
       text-align: center;
        font-size: 28rpx;
        padding-bottom: 37rpx;
     }
      }
     
    }
    .content{
      flex: 1;
      overflow: auto;
      .group{
        text-align: center;
        height: 70rpx;
        line-height: 70rpx;
        font-size: 30rpx;
        margin: 20rpx;
         &::before,
        &::after {
          content: "/";
          color: #333;
        }
      }
      .content_IMG{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        navigator{
          width: 33.33%;
          padding: 10rpx;
          box-sizing: border-box;
          text-align: center;
          image{
            width: 120rpx;
            height: 120rpx;
          }
        }
      }
      
    }
  }
}
</style>