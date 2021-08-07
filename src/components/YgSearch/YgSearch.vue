<template>
  <view class="search u-padding-15">
     <view class="serchPos">
        <u-search 
      placeholder="日照香炉生紫烟"
      :show-action="false"
      :clearabled="true"
      shape="square"
      bg-color="#fff"
      ></u-search>
     </view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.search{
    background-color: #eb4450;
    /* height: 100rpx; */
    
}
/* .serchPos{
  position: relative;
  top: 0;
  left: 0;
  width: 700rpx;  
  height: 80rpx;
} */
</style>