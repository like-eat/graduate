<template>
  <div>
    <h1>元器件区域</h1>
    <!-- Canvas to draw the lines -->
    <canvas
      ref="myCanvas"
      width="1920"
      height="1080"
      style="border: 1px solid black"
    ></canvas>
  </div>
</template>

<script setup="ts">
import cand from "@/data_json/output_cand.json";
import element from "@/data_json/output_element.json";
import rect_count from "@/data_json/output_rectangle.json";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
// 获取矩形数量
console.log(cand);
console.log(element);
const count = rect_count.length;
// 获取 canvas 元素并绘制线段
const myCanvas = ref(null); // 通过 ref 引用 canvas
onMounted(() => {
  const canvas = myCanvas.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    // 反转 Y 轴
    ctx.translate(0, canvas.height); // 将原点移动到底部
    ctx.scale(1, -1); // 反转 Y 轴
    if (ctx) {
      // 设置线的样式
      ctx.lineWidth = 2;
      ctx.strokeStyle = "blue";
      ctx.font = "6px Arial";
      ctx.fillStyle = "#000";
      // 遍历所有线段并绘制
      cand.forEach((segment) => {
        ctx.beginPath(); // 开始绘制路径
        ctx.moveTo(
          (segment.start_x - 215500) * 0.4,
          parseFloat(segment.start_y) + 113400
        ); // 起点
        ctx.lineTo(
          (segment.end_x - 215500) * 0.4,
          parseFloat(segment.end_y) + 113400
        ); // 终点
        ctx.stroke(); // 绘制线段
        element.forEach((item) => {
          // 使用 fillText 绘制文本
          // 注意：这里将 y 坐标调整为正值，因为 canvas 坐标系是从左上角(0, 0)开始的
          ctx.fillText(
            item.text_n,
            (item.start_x - 3.5 - 215500) * 0.4,
            parseFloat(segment.end_y) + 113400
          );
        });
      });
    }
  }
});
</script>

<style scoped>
/* 简单的样式 */
h1 {
  color: #333;
  text-align: center;
  margin-top: 50px;
}
canvas {
  display: block;
  margin: 0 auto;
}
</style>
