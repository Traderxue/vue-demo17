<script setup>
import { ref } from "vue";

const shopList = ref([
  {
    avator: "",
    name: "南京吴彦祖",
    num: "1000.00",
    limit: "1000.00-10000.00",
    per_price: "7.12",
    payment: [
      {
        img: "http://localhost:5173/airpay.png",
      },
      {
        img: "http://localhost:5173/wechat.png",
      },
      {
        img: "http://localhost:5173/unionpay.png",
      },
    ],
  },
  {
    avator: "",
    name: "一只山羊",
    num: "1000.00",
    limit: "1000.00-10000.00",
    per_price: "7.12",
    payment: [
      {
        img: "http://localhost:5173/airpay.png",
      },
      {
        img: "http://localhost:5173/wechat.png",
      },
      {
        img: "http://localhost:5173/unionpay.png",
      },
    ],
  },
  {
    avator: "",
    name: "我爱钓鱼",
    num: "1000.00",
    limit: "1000.00-10000.00",
    per_price: "7.12",
    payment: [
      {
        img: "http://localhost:5173/airpay.png",
      },
      {
        img: "http://localhost:5173/wechat.png",
      },
      {
        img: "http://localhost:5173/unionpay.png",
      },
    ],
  },
]);
</script>

<template>
  <div class="buy">
    <div class="per" v-for="(item, index) in shopList" :key="index">
      <div class="top">
        <img src="@/assets/img/avator.png" alt="" class="avator" />
        <span>{{ item.name }}</span>
      </div>
      <div class="num">
        <span>数量 {{ item.num }} USDT</span>
        <span>单价</span>
      </div>
      <div class="price">
        <span>限额 {{ item.limit }} CNY</span>
        <span class="per_price">{{ item.per_price }}CNY</span>
      </div>
      <div class="pay">
        <div>
          <img
            :src="itemChildren.img"
            alt=""
            class="payment"
            v-for="(itemChildren, index1) in item.payment"
            :key="index1"
          />
        </div>
        <button>购买</button>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped lang="scss">
.buy {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0px 60px 0px;
  .per {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0px 20px;
    margin: 15px 0px;
    .top {
      display: flex;
      align-items: center;
      .avator {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
      span {
        font-size: 17px;
        font-weight: 600;
        margin-left: 10px;
      }
    }
    .num {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: gray;
      font-size: 13px;
      margin-top: 5px;
    }
    .price {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      color: gray;
      font-size: 13px;
      .per_price {
        font-size: 17px;
        font-weight: 600;
        color: #1796fd;
      }
    }
    .pay {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      button {
        width: 60px;
        height: 25px;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
        border: 0;
        background-color: #1796fd;
      }
    }
    hr {
      margin-top: 10px;
      border: 1px solid #f5f5f5;
    }
  }
}
</style>