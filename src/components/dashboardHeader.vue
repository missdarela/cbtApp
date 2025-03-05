<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import Logout from "../assets/icons/dashboardlogout.vue";
import {ref,computed} from "vue"
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { onMounted } from "vue";


const router = useRouter();
const authStore = useAuthStore();


onMounted(() => {
  if (!authStore.user) {
    authStore.fetchUser();
  }
});

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

// Logout function that calls the store's logout action and navigates to login
const logout = async () => {
  await authStore.logout();
  router.push("/login");
};
</script>

<template>
  <main class="font-mont font-light">
    <section class=" px-16 py-3">
      <figure class="flex justify-end items-center gap-2">
        <el-avatar size="medium" class="!text-xl !font-bold">{{ firstLetter }}</el-avatar>
        <figcaption>
          <el-dropdown>
            <!-- Check if the user object exists -->
            <el-text v-if="authStore.user">
              {{ capitalizedFirstName }}
              <el-icon class="el-icon--right">
              </el-icon>
            </el-text>
            <el-text v-else>
              Loading...
            </el-text>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="!text-red-600" @click="logout">
                  <Logout />
                  <span> Logout </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <small class="block -mt-1">Jambite</small>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
