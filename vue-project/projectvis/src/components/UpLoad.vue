<template>
  <div>
    <!-- 文件选择按钮 -->
    <input type="file" @change="handleFileChange" />
    <!-- 上传按钮 -->
    <button @click="uploadFile">Upload File</button>
  </div>
</template>

<script setup >
import { ref } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";
//import outputData from "@/data_json/output_cand.json"


// 用 ref 创建响应式变量来存储文件内容
const fileContent = ref(null);

// 处理文件选择事件，读取文件内容
const handleFileChange = (event) => {
  const file = event.target.files[0]; // 获取选择的文件
  const reader = new FileReader(); // 创建 FileReader 对象

  // 当文件读取完成时，将内容保存到 fileContent 中
  reader.onload = (e) => {
    fileContent.value = e.target.result; // 设置文件内容
  };

  // 读取文件为文本
  if (file) {
    reader.readAsText(file); // 读取文件内容
  }
};

// 获取 router 实例
const router = useRouter();
// 上传文件内容到 Flask 后端
const uploadFile = async () => {
  if (fileContent.value) {
    try {
      // 使用 axios 发送 POST 请求，将文件内容传到后端
      const response = await axios.post("http://127.0.0.1:5000/upload", {
        fileData: fileContent.value, // 将文件内容传递到后端
      });
      console.log("Response from server:", response.data); // 打印后端的响应
      if(response.data.message == 'Data received successfully!')
      {
        //后端成功接收数据后 跳转界面
        router.push('/empty');  // 跳转到新的页面
        console.log(123);
      }
    } catch (error) {
      console.error("Error uploading file:", error); // 捕获并打印错误
    }
  } else {
    alert("Please select a file first"); // 如果没有选择文件，显示提示信息
  }
};
</script>
