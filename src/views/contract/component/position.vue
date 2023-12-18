<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps(["positionList"]);
</script>

<template>
  <div class="position">
    <div class="header">
      <span>当前持仓</span>
      <div>
        <span>全部</span>
        <span class="material-symbols-outlined" style="font-size: 22px">
          list_alt
        </span>
      </div>
    </div>
    <div class="box">
      <div v-if="props.positionList.length > 0">
        <div
          class="per"
          v-for="(item, index) in props.positionList"
          :key="index"
        >
          <div>
            <span>种类</span>
            <span>{{ item.type }}</span>
          </div>
          <div>
            <span>方向</span>
            <span>{{item.direction}}</span>
          </div>
          <div>
            <span>开仓价格</span>
            <span>{{ item.open_price }}</span>
          </div>
          <div>
            <span>数量</span>
            <span>{{ item.num }}USDT</span>
          </div>
        </div>
      </div>
      <div v-else><van-empty description="描述文字" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.position {
  width: auto;
  height: auto;
  margin-top: 30px;
  font-size: 14px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
  }
  .box {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .per {
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      border-bottom: 1px solid gray;
      margin-top: 15px;
      padding-bottom: 10px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>