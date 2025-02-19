<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import Logout from "../assets/icons/dashboardlogout.vue";

import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser();
});

const logout = async () => {
  await authStore.logout();
  router.push("/login");
};
</script>

<template>
  <main class="w-[76vw]">
    <section class="bg-[#f2f4fa] -ml-5 px-16 py-3">
      <figure class="flex justify-end items-center gap-2">
        <el-avatar size="medium" class="!text-xl !font-bold">J</el-avatar>
        <figcaption>
          <el-dropdown>
            <el-text>
              {{ authStore.user.fname }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-text>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="!text-red-600">
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
    <hr class="bg-[#038F74] p-[1px] -ml-5" />
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