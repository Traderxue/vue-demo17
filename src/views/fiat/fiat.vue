<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("买入");

const navList = ref([
  {
    title: "买入",
    path: "/buy",
  },
  {
    title: "卖出",
    path: "sell",
  },
]);

const changeTab = (item) => {
  active.value = item.title;
  router.push(item.path)
};
</script>

<template>
  <div class="fiat">
    <div class="header">
      <span>法币交易</span>
    </div>
    <div class="banner">
      <img src="@/assets/img/fait.png" alt="" />
    </div>
    <div class="nav">
      <span
        v-for="(item, index) in navList"
        :key="index"
        @click="changeTab(item)"
        :class="active == item.title ? 'active' : ''"
        >{{ item.title }}</span
      >
    </div>
    <div class="box">
      <RouterView />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.fiat {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    text-align: center;
  }
  .banner {
    margin: 15px 0px;
    width: auto;
    height: auto;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    span {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .active {
      color: #ff2e63;
      border-bottom: 3px solid #ff2e63;
      padding-bottom: 4px;
    }
  }
}
</style>
