<script setup>
import { ref } from "vue";

const positionList = ref([]);
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
      <div v-if="positionList.length > 0">11</div>
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
}
</style>