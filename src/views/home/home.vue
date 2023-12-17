<script setup>
import { ref } from "vue";

const imgList = [
  {
    img: "http://localhost:5173/banner1.png",
  },
  {
    img: "http://localhost:5173/banner2.png",
  },
  {
    img: "http://localhost:5173/banner3.png",
  },
];
</script>

<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/logo.png" alt="" />
      <span class="material-symbols-outlined"> sms </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        mode="link"
        background="#FFF"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <hr />
    <div class="help">
      <div>
        <h3>帮助中心</h3>
        <span>问题/指南/资料</span>
        <img src="@/assets/img/help.png" alt="">
      </div>
      <div>
        <h3>公告中心</h3>
        <span>新闻/活动/咨询</span>
        <img src="@/assets/img/announcement.png" alt="">
      </div>
    </div>
    <hr>
    <div class="fiat">
      <img src="@/assets/img/fiat.png" alt="">
      <div>
        <h3>法币交易</h3>
        <span>人民币入金/出金</span>
      </div>
    </div>
    <hr>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding: 15px 0px 60px 0px;
  .header {
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 90px;
      height: 25px;
    }
    span {
      font-size: 24px;
    }
  }
  .banner {
    width: auto;
    height: 140px;
    padding: 15px 15px 0px 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 140px;
    }
  }
  hr {
    border: 5px solid #f5f5f5;
  }
  .help {
    width: auto;
    height: 80px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    div{
      width: 48%;
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span{
        font-size: 14px;
      }
      img{
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 45px;
        height: 45px;
      }
    }
  }
  .fiat{
    width: auto;
    height: 100px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 40%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      span{
        font-size: 14px;
        margin-top: 3px;
      }
    }
    img{
      width: 50%;
      height: 100px;
    }
  }
}
</style>