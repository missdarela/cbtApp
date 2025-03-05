<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import {ref} from "vue"


import { useAuthStore } from "../stores/authStore";
const authStore = useAuthStore();


</script>

<template>
  <main class="font-mont">
    <section class="w-[85%] my-9 mx-auto">
      <h2 class="text-[#187c68] text-xl font-semibold">Choose Your Field</h2>

      <router-link to="take-exam/arts">
        <el-container class="!shadow-xl rounded-xl my-6 hover:bg-[#fef4ef] duration-700">
          <el-aside class="bg-gradient-to-b from-[#fe7e51] to-[#eaa085] !w-[6px] rounded-l-xl"></el-aside>
          <el-container>
            <el-main class="!pt-[10px]">
              <section class="flex justify-between">
                <div>
                  <p class="text-[#fe7e51] text-lg">Art Subjects</p>
                  <p class="text-[#798AA3] text-xs py-3">Literature, Economics etc</p>
                </div>
                <p class="text-[#798AA3] text-sm">10 Subjects</p>
              </section>
            </el-main>
          </el-container>
        </el-container>
      </router-link>

      <router-link to="take-exam/science">
        <el-container class="!shadow-xl rounded-xl hover:bg-[#efffff] my-3 duration-700">
          <el-aside class="bg-gradient-to-b from-[#187c68] to-[#52f5d5] !w-[6px] rounded-l-xl"></el-aside>
          <el-container>
            <el-main class="!pt-[10px]">
              <section class="flex justify-between">
                <div>
                  <p class="text-[#187c68] text-lg">Science and Engineering Subjects</p>
                  <p class="text-[#798AA3] text-xs py-3">20 Questions</p>
                </div>
                <p class="text-[#798AA3] text-sm">15 Subjects</p>
              </section>
            </el-main>
          </el-container>
        </el-container>
      </router-link>

      <router-link to="take-exam/commerce">
        <el-container class="!shadow-xl rounded-xl my-6 hover:bg-[#ffefff] duration-700">
          <el-aside class="bg-gradient-to-b from-[#71357b] to-[#c242d8] !w-[6px] rounded-l-xl"></el-aside>
          <el-container>
            <el-main class="!pt-[10px]">
              <section class="flex justify-between">
                <div>
                  <p class="text-[#187c68] text-lg">Commerce Subjects</p>
                  <p class="text-[#798AA3] text-xs py-3">Accounting, Commerce etc</p>
                </div>
                <p class="text-[#798AA3] text-sm">10 Subjects</p>
              </section>
            </el-main>
          </el-container>
        </el-container>
      </router-link>
    </section>
    <router-view />
  </main>
</template>
