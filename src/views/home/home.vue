<script setup>
import { ref } from "vue";

const rate = ref(7.12);

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

const quoteList = ref([
  {
    type: "btc",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "eth",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "sol",
    price: 10315.25,
    parcent: "+1.15",
    up: 0,
  },
]);

const typeList = ref([
  {
    type: "btc",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "eth",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "ht",
    price: 10315.25,
    parcent: "+1.15",
    up: 0,
  },
  {
    type: "ape",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "etc",
    price: 10315.25,
    parcent: "+1.15",
    up: 1,
  },
  {
    type: "bch",
    price: 10315.25,
    parcent: "+1.15",
    up: 0,
  },
]);
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
    <div class="quote">
      <div v-for="(item, index) in quoteList" :key="index">
        <span class="span1">{{ item.type.toUpperCase() }}/USDT</span>
        <span class="span2" :class="item.up == 1 ? 'up' : 'down'">{{
          item.price
        }}</span>
        <span class="span3" :class="item.up == 1 ? 'up' : 'down'"
          >{{ item.parcent }}%</span
        >
        <span class="span4">{{ item.price * rate }}/CNY</span>
      </div>
    </div>
    <hr />
    <div class="help">
      <div>
        <h3>帮助中心</h3>
        <span>问题/指南/资料</span>
        <img src="@/assets/img/help.png" alt="" />
      </div>
      <div>
        <h3>公告中心</h3>
        <span>新闻/活动/咨询</span>
        <img src="@/assets/img/announcement.png" alt="" />
      </div>
    </div>
    <hr />
    <div class="fiat">
      <img src="@/assets/img/fiat.png" alt="" />
      <div>
        <h3>法币交易</h3>
        <span>人民币入金/出金</span>
      </div>
    </div>
    <hr />
    <div class="base">
      <div class="top">
        <span></span>
        <h3>基础行情</h3>
      </div>
      <div class="box">
        <div class="title">
          <span>种类</span>
          <span style="text-align: center">价格</span>
          <span style="text-align: right">涨跌幅</span>
        </div>
        <div class="list">
          <div v-for="(item, index) in typeList" :key="index">
            <span>{{ item.type.toUpperCase() }}/USDT</span>
            <span
              style="text-align: center"
              :class="item.up == 1 ? 'up' : 'down'"
              >{{ item.price }}</span
            >
            <span style="text-align: right"
              ><button :class="item.up == 1 ? 'up_btn' : 'down_btn'">
                {{ item.parcent }}%
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
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
    div {
      width: 48%;
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span {
        font-size: 14px;
      }
      img {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 45px;
        height: 45px;
      }
    }
  }
  .fiat {
    width: auto;
    height: 100px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 40%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 14px;
        margin-top: 3px;
      }
    }
    img {
      width: 50%;
      height: 100px;
    }
  }
  .quote {
    display: flex;
    justify-content: space-around;
    margin: 15px;
    div {
      width: 33%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      span {
        margin: 2px 0px;
      }
      .span1 {
        color: #181818;
        font-size: 14px;
      }
      .span2 {
        font-size: 16px;
      }
      .span3 {
        font-size: 14px;
      }
      .span4 {
        font-size: 12px;
        color: gray;
        font-weight: 500;
      }
      .up {
        color: #00b8a9;
      }
      .down {
        color: #e84545;
      }
    }
  }
  .base {
    padding: 15px;
    .top {
      display: flex;
      align-items: center;
      span {
        display: block;
        width: 5px;
        height: 20px;
        background: linear-gradient(to right bottom, #00b8a9, #defcf9);
      }
      h3 {
        margin-left: 10px;
      }
    }
    .box {
      .title {
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 33%;
          font-size: 13px;
        }
      }
      .list {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          padding: 10px 0px;
          span {
            width: 33%;
            button {
              color: #fff;
              border: 0;
              font-size: 14px;
              font-weight: 500;
              width: 65px;
              height: 30px;
              border-radius: 2px;
            }
          }
          .up {
            color: #00b8a9;
          }
          .down {
            color: #e84545;
          }
          .up_btn {
            background: #00b8a9;
          }
          .down_btn {
            background: #e84545;
          }
        }
      }
    }
  }
}
</style>