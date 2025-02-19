<script setup>
import DashboardIcon from "../assets/icons/dashboardIcon.vue";
import ProfileIcon from "../assets/icons/dashboardProfileIcon.vue";
import Exams from "../assets/icons/dashboardExams.vue";
import Results from "../assets/icons/dashboardResult.vue";
import DashboardHeader from "../components/dashboardHeader.vue";


</script>
<template>
  <main>
    <section class="">
      <!-- <div v-if="authStore.loading">
        <p class="text-green-600">Loading user data...</p>
      </div> -->
      <div  class="common-layout">
        <el-container>
          <el-aside
            width="280px"

          
            class="bg-[#038F74] text-white h-[100vh] px-10 py-10"
          >

            <section class="flex flex-col justify-between items-baseline">
              <figure>
                <img
                  src="../assets/images/Skillboost-Africa-Logo.png"
                  alt="Skillboost Africa Logo"
                  width="100px"
                  class="mx-auto"
                />
                <figcaption>
                  <small>SkillBoost Africa CBT Examination</small>
                </figcaption>
              </figure>
              <section
                class="flex flex-col gap-10 justify-around items-baseline py-14 px-5"
              >
                <div
                  class="dashboard md:flex gap-4 justify-between items-center"
                >
                  <DashboardIcon class="" />
                  <h3>Dashboard</h3>
                </div>

                <div class="profile md:flex gap-4 justify-between items-center">
                  <ProfileIcon class="" />
                  <h3>Profile</h3>
                </div>

                <div
                  class="registration md:flex gap-4 justify-evenly items-center"
                >
                  <Exams class="" />
                  <h3>Take Exam</h3>
                </div>

                <div class="md:flex gap-4 justify-evenly items-center">
                  <Results class="" />
                  <h3>Results</h3>
                </div>
              </section>
            </section>
          </el-aside>

          <el-container>
            <el-header width="100%" class="!w-full">
              <DashboardHeader />
            </el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>
      </div>
    </section>
  </main>
</template>


<style scoped></style>