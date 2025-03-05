<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { computed } from "vue";



const router = useRouter();
const authStore = useAuthStore();

const firstLetter = computed(() => {
  // Check if authStore.user exists and has the fname property
  if (authStore.user && authStore.user.fname) {
    return authStore.user.fname[0].toUpperCase();
  }
  return ""; 
});
const capitalizedFirstName = computed(() => {
  if (authStore.user && authStore.user.fname) {
    return authStore.user.fname.charAt(0).toUpperCase() + authStore.user.fname.slice(1);
  }
  return "";
});


</script>

<template>
  <main class="font-mont font-medium">
    <section>
      <div>
        <div class="text-[#0E2C75] bg-[#d4e6e3] pl-5 py-1">Profile</div>

        <section class="text-center">
          <span
            class="block bg-gradient-to-r from-[#1F7C6C] to-[#39E2C5] w-[80%] h-14 rounded-xl mx-auto mt-2"
          ></span>
          <div class="mt-[-40px]">
            <el-avatar class="!text-2xl font-bold" :size="60" v-if="authStore.user && authStore.user.fname">
              {{ firstLetter }}
            </el-avatar>

            <div v-else>
              <el-avatar :size="60" class="!text-2xl">U</el-avatar>
            </div>
            <div>
              <h3 class="text-[15px] text-[#0B235E]" v-if="authStore.user && authStore.user.fname">  
                {{ capitalizedFirstName}}
              </h3>
              <span v-else>User</span>
              <a href=""><p class="text-[#798AA3] text-xs" v-if="authStore.user && authStore.user.email">
                  {{ authStore.user.email }}
                </p>
                <span v-else>user@gmail.com</span>
              </a>
                
              <p class="text-[15px] text-[#0B235E]">Jambite</p>
            </div>
          </div>
        </section>
       
        <section>
            <section class="w-[80%] mx-auto my-3">
          <el-container class="">
            <el-aside
              class="bg-gradient-to-b from-[#1F7C6C] to-[#39E2C5] !w-[6px] !h-28 rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-header class="bg-[#E9F0F4] text-[#0b235e] !h-7">
                <p>Personal</p>
              </el-header>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <p class="text-[#798AA3] text-sm">Firstname</p>
                    <p class="text-[#0b235e] py-2">{{ capitalizedFirstName }}</p>
                  </div>
                  <div>
                    <p class="text-[#798AA3] text-sm">Other Names</p>
                    <p class=" text-[#0b235e] py-2">{{ authStore.user.lname }}</p>
                  </div>
                  <div>
                    <p class="text-[#798AA3] text-sm">Country</p>
                    <p class=" text-[#0b235e] py-2">Nigeria</p>
                  </div>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
        </section>

        <section class="w-[80%] mx-auto my-6">
          <el-container class="">
            <el-aside
              class="bg-gradient-to-b from-[#1F7C6C] to-[#39E2C5] !w-[6px] !h-28 rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-header class="bg-[#E9F0F4] text-[#0b235e] !h-7">
                <p>Contact</p>
              </el-header>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <p class="text-[#798AA3] text-sm">Email</p>
                    <a href=""><p class=" text-[#0b235e] py-2">{{ authStore.user.email }}</p></a>
                  </div>
                  <div>
                    <p class="text-[#798AA3] text-sm">Mobile Number</p>
                    <p class=" text-[#0b235e] py-2">{{ authStore.user.phoneNumber }}</p>
                  </div>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
        </section>
        </section>
      </div>
    </section>
  </main>
</template>
