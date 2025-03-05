<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import {ref} from "vue"


import { useAuthStore } from "../stores/authStore";
const authStore = useAuthStore();


</script>

<template>
  <main class="font-mont">
    <router-view />
  </main>
</template>
