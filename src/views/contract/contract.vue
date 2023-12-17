<script setup>
import { onMounted, ref } from "vue";
import { getDepath,getDetail } from "@/api/coin.js";
import { color } from "echarts";

const active = ref("buy");
const activeText = ref("买入做多");

const selectedLever = ref(1);
const selectedPrice = ref("market");

const num = ref("");
const balance = ref(10);

const current = ref({
  type: "btc",
  parcent: "+0.13",
  price: "",
  up: 0,
});

const bids = ref([]);
const asks = ref([]);

const bidsTotal = ref(0);
const asksTotal = ref(0);

const getDepaths = async () => {
  bidsTotal.value = 0;
  asksTotal.value = 0;
  const { data: res } = await getDepath(current.value.type);
  bids.value = res.tick.bids;
  asks.value = res.tick.asks;

  bids.value.forEach((item) => {
    bidsTotal.value += item[1];
  });
  asks.value.forEach((item) => {
    asksTotal.value += item[1];
  });
};

const getDetails = async () =>{
  const{data:res} = await getDetail(current.value.type)
  current.value.price = res.tick.close
}

const buy = () => {
  active.value = "buy";
  activeText.value = "买入做多";
};
const sell = () => {
  active.value = "sell";
  activeText.value = "卖出做空";
};

setInterval(() => {
  getDepaths();
  getDetails();
}, 5000);

onMounted(() => {
  getDepaths();
  getDetails()
});
</script>

<template>
  <div class="contract">
    <div class="header">
      <span>合约交易</span>
    </div>
    <div class="title">
      <div>
        <span class="material-symbols-outlined"> subject </span>
        <span class="span1">{{ current.type.toUpperCase() }}/USDT</span>
        <span class="span2" :class="current.up == 1 ? 'up' : 'down'"
          >{{ current.parcent }}%</span
        >
      </div>
      <span class="material-symbols-outlined"> monitoring </span>
    </div>
    <div class="box">
      <div class="left">
        <div class="btn">
          <button class="buy" @click="buy">买入</button>
          <button class="sell" @click="sell">卖出</button>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div class="select">
            <select name="select" v-model="selectedPrice">
              <option value="market">市价</option>
              <option value="limit">限价</option>
            </select>
          </div>
          <div class="lever">
            <select name="lever" v-model="selectedLever">
              <option value="1">1x</option>
              <option value="10">10x</option>
              <option value="50">50x</option>
              <option value="100">100x</option>
              <option value="125">125x</option>
            </select>
          </div>
        </div>
        <div class="price">
          <input
            type="text"
            v-model="current.price"
            :disabled="selectedPrice == 'market'"
          />
        </div>
        <div class="num">
          <input type="text" v-model="num" placeholder="0.000" />
          <span>USDT</span>
        </div>
        <div class="canuse">
          <span>可用数量</span>
          <span>{{ (balance * selectedLever).toFixed(2) }} USDT</span>
        </div>
        <div class="lastbtn">
          <button :class="active == 'buy' ? 'buy' : 'sell'">
            {{ activeText }}
          </button>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <span>价格</span>
          <span>数量</span>
        </div>
        <div class="content">
          <div class="bids">
            <div
              v-for="(item, index) in bids"
              :key="index"
              :style="
                'background: linear-gradient(to left, rgba(48,227,202,0.5) ' +
                (item[1] / bidsTotal + 0.1) * 200 +
                '%, transparent 0)'
              "
            >
              <span class="span1">{{ item[0] }}</span
              ><span>{{ item[1].toFixed(3) }}</span>
            </div>
          </div>
          <div class="mid" style="font-size: 17px; font-weight: 600">
            <span :style="{ color: current.up == 1 ? '#00b8a9' : '#ff2e63' }">{{ current.price }}</span>
          </div>
          <div class="asks">
            <div
              v-for="(item, index) in asks"
              :key="index"
              :style="
                'background: linear-gradient(to left, rgba(246,114,128,0.5) ' +
                (item[1] / asksTotal + 0.1) * 200 +
                '%, transparent 0)'
              "
            >
              <span class="span1">{{ item[0] }}</span
              ><span>{{ item[1].toFixed(3) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.contract {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  .header {
    text-align: center;
  }
  .title {
    width: auto;
    height: auto;
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .span1 {
        font-weight: 600;
        font-size: 14px;
        margin: 0px 5px;
      }
      .span2 {
        font-weight: 600;
        font-size: 12px;
      }
      .up {
        color: #00b8a9;
      }
      .down {
        color: #e84545;
      }
    }
  }
  .box {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 50%;
      height: auto;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .btn {
        display: flex;
        justify-content: space-between;
        button {
          width: 50%;
          height: 35px;
          border: 0;
          border-radius: 0;
          font-size: 13px;
          color: #fff;
        }
        .buy {
          background: #00b8a9;
        }
        .sell {
          background: #e84545;
        }
      }
      .select {
        width: 48%;
        height: 35px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        select {
          border: 1px solid gray;
          outline: none;
          width: 100%;
          height: 35px;
          padding: 0px 5px;
          -webkit-border-radius: 0px;
          -webkit-appearance: none;
          background-image: url("http://ourjs.github.io/static/2015/arrow.png");
          background-repeat: no-repeat;
          background-position: right 5px top 50%;
        }
        option:hover {
          background-color: #ff2e63;
        }
      }
      .lever {
        width: 48%;
        height: 35px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        select {
          border: 1px solid gray;
          outline: none;
          width: 100%;
          height: 35px;
          padding: 0px 5px;
          -webkit-border-radius: 0px;
          -webkit-appearance: none;
          background-image: url("http://ourjs.github.io/static/2015/arrow.png");
          background-repeat: no-repeat;
          background-position: right 5px top 50%;
        }
        option:hover {
          background-color: #ff2e63;
        }
      }
      .price {
        margin-top: 10px;
        width: 100%;
        height: 35px;
        overflow: hidden;
        // border: 1px solid gray;
        background: #f5f5f5;
        input {
          border: 0;
          height: 35px;
          padding-left: 5px;
          background: #f5f5f5;
        }
      }
      .num {
        margin-top: 15px;
        width: 100%;
        height: 35px;
        overflow: hidden;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 5px;
        box-sizing: border-box;
        input {
          border: 0;
          height: 35px;
          width: 60%;
          padding-left: 5px;
        }
      }
      .canuse {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
      .lastbtn {
        width: auto;
        height: 35px;
        margin-top: 15px;
        button {
          width: 100%;
          height: 35px;
          border: 0;
          font-size: 13px;
          color: #fff;
        }
        .buy {
          background: #00b8a9;
        }
        .sell {
          background: #e84545;
        }
      }
    }
    .right {
      width: 50%;
      height: auto;
      padding-left: 20px;
      .top {
        display: flex;
        justify-content: space-between;
        height: 8%;
        span {
          font-size: 13px;
        }
      }
      .content {
        width: auto;
        height: 92%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: #333;
        .bids {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          box-sizing: border-box;
          div {
            display: flex;
            justify-content: space-between;
            padding: 4px 0px;
            .span1{
              color: #00b8a9;
            }
          }
        }
        .asks {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          box-sizing: border-box;
          div {
            display: flex;
            justify-content: space-between;
            padding: 4px 0px;
            .span1{
              color: #ff2e63;
            }
          }
        }
      }
    }
  }
}
</style>
  