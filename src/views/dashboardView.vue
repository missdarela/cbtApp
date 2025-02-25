<script setup>
import DashboardIcon from "../assets/icons/dashboardIcon.vue";
import ProfileIcon from "../assets/icons/dashboardProfileIcon.vue";
import Exams from "../assets/icons/dashboardExams.vue";
import Results from "../assets/icons/dashboardResult.vue";
import DashboardHeader from "../components/dashboardHeader.vue";
import DashboardIndex from "../layouts/dashboardIndex.vue";


</script>
<template>
  <main>
    <section class="">
   
      <div  class="common-layout">
        <el-container>
          <el-aside
            width="250px"

          
            class="bg-[#038F74] text-white px-5 py-10"
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
                  <router-link to=""><h3>Dashboard</h3></router-link>
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
            <el-header class="bg-[#f2f4fa] border-b-2 border-[#038f74]">
              <DashboardHeader />
            </el-header>
            <el-main class=" bg-[#e6e2fb]">
              <DashboardIndex />
            </el-main>
          </el-container>
        </el-container>
      </div>
    </section>
  </main>
</template>


<style scoped></style>