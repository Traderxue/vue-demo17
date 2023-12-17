<script setup>
import { ref } from "vue";

const typeList = ref([
  {
    type: "btc",
    price: 16234.15,
    parcent: 1.15,
    up: 1,
  },
]);
</script>

<template>
  <div class="optional">
    <div v-if="typeList.length > 0">
        <div class="title">
            
        </div>
    </div>
    <div v-else><van-empty description="暂无自选" /></div>
  </div>
</template>