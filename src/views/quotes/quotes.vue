<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const router  = useRouter();

const navList = ref([
  {
    title: "自选",
    path: "/optional",
  },
  {
    title: "USDT",
    path: "/usdt",
  },
  {
    title: "ETH",
    path: "/eth",
  },
]);

const active = ref("USDT");

const changeTab = (item) => {
  active.value = item.title;
  router.push(item.path)
};
</script>

<template>
  <div class="quotes">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="banner">
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
.quotes {
  width: auto;
  height: auto;
  padding: 15px 0px 60px 0px;
  .header {
    text-align: center;
  }
  .banner {
    width: auto;
    margin: 20px 0px;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .active {
      font-weight: 600;
      color: #ff2e63;
      border-bottom: 2px solid #ff2e63;
      padding-bottom: 3px;
    }
  }
  .box{
    padding: 0px 15px;
  }
}
</style>