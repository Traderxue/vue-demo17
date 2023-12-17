<script setup>
import { ref } from "vue";
import {showToast} from "vant";

const active = ref(0);
const loading = ref(false)

const onRefresh = () =>{
    setTimeout(() => {
        showToast('刷新成功');
        window.location.reload();
        loading.value = false;
      }, 1000);
}

</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>

    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span><br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/quotes">
        <span class="material-symbols-outlined"> candlestick_chart </span
        ><br /><span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/contract">
        <span class="material-symbols-outlined"> insert_chart </span><br /><span
          >合约</span
        >
      </van-tabbar-item>
      <van-tabbar-item to="/fiat"
        ><span class="material-symbols-outlined"> paid </span><br />
        <span>法币</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span><br /><span
          >我的</span
        ></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: auto;
  height: auto;
}
</style>