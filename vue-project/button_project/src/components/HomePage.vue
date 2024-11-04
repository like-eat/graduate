<template>
  <div>
    <h1>Home Page</h1>
    <button @click="goToEmptyPage">Go to Empty Page</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  setup() {
    const router = useRouter();

    const goToEmptyPage = () => {
      router.push("/empty"); // 跳转到空白页面
    };

    return {
      goToEmptyPage,
    };
  },
});
</script>

<style scoped>
/* 添加样式使按钮更美观 */
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
