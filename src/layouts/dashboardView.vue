<script setup>
import { ref, reactive } from "vue";

import { onMounted } from "vue";
import DashboardIcon from "../assets/icons/dashboardIcon.vue";
import ProfileIcon from "../assets/icons/dashboardProfileIcon.vue";
import Exams from "../assets/icons/dashboardExams.vue";
import Results from "../assets/icons/dashboardResult.vue";
import DashboardHeader from "../components/dashboardHeader.vue";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";


const authStore = useAuthStore();
const router = useRouter

onMounted(() => {
  if (!authStore.user) {
    authStore.fetchUser();
  }
});


</script>
<template>
  <main>
    <section class="font-mont font-normal">
      <div class="common-layout">
        <el-container class="h-screen">
          <el-aside width="250px" class="bg-[#187c68] text-white px-5 py-10">
            <section class="flex flex-col justify-between items-baseline">
              <figure>
                <img
                  src="../assets/images/Skillboost-Africa-Logo.png"
                  alt="Skillboost Africa Logo"
                  width="100px"
                  class="mx-auto"
                />
                <figcaption>
                  <small class="text-xs">SkillBoost Africa CBT Examination</small>
                </figcaption>
              </figure>
              <section
                class="flex flex-col gap-10 justify-around items-baseline py-14 px-5 font-bold"
              >
                <router-link to="/dashboard"
                  class="dashboard md:flex gap-4 justify-between items-center"
                >
                  <DashboardIcon class="" />
                  <h3 class="">Dashboard</h3>
                </router-link>

                <router-link to="/dashboard/profile"
                  class="profile md:flex gap-4 justify-between items-center">
                  <ProfileIcon class="" />
                  <h3>Profile</h3>
                </router-link>

                <router-link to="/dashboard/take-exam"
                  class="registration md:flex gap-4 justify-evenly items-center"
                >
                  <Exams class="" />
                  <h3>Take Exam</h3>
                </router-link>

                <router-link to="/dashboard/results"
                class="md:flex gap-4 justify-evenly items-center">
                  <Results class="" />
                  <h3>Results</h3>
                </router-link>
              </section>
            </section>
          </el-aside>

          <el-container>
            <el-header class="bg-[#f2f4fa]">
              <DashboardHeader />
            </el-header>
            <el-main>
              <!-- <component :is="tabComponents[activeTab]"/> -->
                <router-view />
            </el-main>
          </el-container>
        </el-container>
      </div>
    </section>
  </main>
</template>


<style scoped></style>