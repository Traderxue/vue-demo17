<script setup>
import { onMounted, ref } from "vue";

const select = ref(null);
const selected = ref("");

const num = ref("0.000")

const current = ref({
  type: "btc",
  parcent: "+0.13",
  price: "17502.25",
  up: 0,
});

onMounted(() => {
  selected.value = select.value.value
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
          <button class="buy">买入</button><button class="sell">卖出</button>
        </div>
        <div class="select">
          <select name="select" id="" ref="select">
            <option value="market" selected>市价</option>
            <option value="limit">限价</option>
          </select>
        </div>
        <div class="price">
          <input type="text" v-model="current.price" :disabled="selected == 'market'"/>
          
        </div>
        <div class="num">
          <input type="text" v-model="num" />
          <span>USDT</span>
        </div>
      </div>
      <div class="right"></div>
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
        width: 100%;
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
        border: 1px solid gray;
        input {
          border: 0;
          height: 35px;
          padding-left: 5px;
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
    }
    .right {
      width: 50%;
      height: auto;
    }
  }
}
</style>
  