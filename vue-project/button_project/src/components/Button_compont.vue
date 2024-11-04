<template>
    <div class="container">
      <!-- 按钮部分 -->
      <div class="button-group">
        <button @click="onClick(1)">Button 1</button>
        <button @click="onClick(2)">Button 2</button>
        <button @click="onClick(3)">Button 3</button>
        <button @click="onClick(4)">Button 4</button>
      </div>
      <!-- 其他内容 -->
      <div class="content">
        <h1>Content Area</h1>
        <p>This is where the main content will appear.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'ButtonLayout',
    setup() {
      const onClick = (buttonNumber: number) => {
        console.log(`Button ${buttonNumber} clicked`);
        // 这里可以添加按钮点击后的逻辑处理
      };
  
      return {
        onClick,
      };
    }
  });
  </script>
  
  <style scoped>
  /* 总容器设置 */
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  
  /* 左侧按钮部分设置 */
  .button-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 从上到下排列 */
    align-items: flex-start; /* 左对齐 */
    padding: 20px;
    width: 150px; /* 控制按钮区域宽度 */
    background-color: #f0f0f0;
  }
  
  /* 按钮样式 */
  .button-group button {
    margin-bottom: 10px; /* 按钮之间的间距 */
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .button-group button:hover {
    background-color: #0056b3; /* 鼠标悬停时的效果 */
  }
  
  /* 主内容区域设置 */
  .content {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
  }
  </style>
  