<script setup>
import { ref } from "vue";

const typeList = ref([
  {
    type: "btc",
    price: 16234.15,
    parcent: 1.15,
    up: 1,
  },
  {
    type: "eth",
    price: 16234.15,
    parcent: 1.15,
    up: 1,
  },
  {
    type: "sol",
    price: 16234.15,
    parcent: 1.15,
    up: 0,
  },
]);
</script>

<template>
  <div class="optional">
    <div v-if="typeList.length > 0">
      <div class="title">
        <span>种类</span>
        <span style="text-align: center">价格</span>
        <span style="text-align: right">涨跌幅</span>
      </div>
      <div class="content">
        <div v-for="(item, index) in typeList" :key="index">
          <span>{{ item.type.toUpperCase() }}/USDT</span>
          <span style="text-align: center" :class="item.up==1?'up':'down'">{{ item.price }}</span>
          <span style="text-align: right"
            ><button :class="item.up==1?'up_btn':'down_btn'">{{ item.parcent }}%</button></span
          >
        </div>
      </div>
    </div>
    <div v-else><van-empty description="暂无自选" /></div>
  </div>
</template>

<style scoped lang="scss">
.optional {
  width: auto;
  height: auto;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    span {
      width: 33%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0px;
      span {
        width: 33%;
        font-weight: 600;
        button {
          width: 65px;
          height: 30px;
          border: 0;
          font-weight: 500;
          color: #fff;
          border-radius: 2px;
          font-size: 13px;
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
</style>