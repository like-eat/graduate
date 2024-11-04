<template>
    <div>
      <h1>Upload File</h1>
      <input type="file" @change="handleFileUpload" />
      <button @click="submitFile">Upload</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const file = ref<File | null>(null);
  const router = useRouter();
  
  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      file.value = target.files[0];
    }
  };
  
  const submitFile = async () => {
    if (file.value) {
      const formData = new FormData();
      formData.append('file', file.value);
  
      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // 如果后端返回成功，跳转到新的页面
        if (response.status === 200) {
          router.push('/success');  // 跳转到新的页面
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      alert('Please select a file first!');
    }
  };
  </script>
  