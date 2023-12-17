<script setup>
import { ref } from "vue";

const total = 89;

const dataList = ref([
  [42054.79, 0.201423],
  [42055, 0.001],
  [42057.01, 3.021033],
  [42057.02, 0.547003],
  [42057.44, 0.139535],
]);
</script>

<template>
  <div class="contract">
    <div class="header">
      <span>合约交易</span>
    </div>

    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="box"
      :style="'background: linear-gradient(to left, #f0f0f0 ' + (item[1]+0.1)*100 + '%, transparent 0)'"
    >
      ss
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
  .box {
    width: 180px;
    height: 30px;
  }
}
</style>
  