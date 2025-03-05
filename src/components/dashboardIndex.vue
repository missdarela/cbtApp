<script setup>

</script>
<template>
    <main class="font-mont font-medium">
        <section class="px-10">
            <h2 class="text-[#187c68] font-semibold text-xl pb-1">Dashboard</h2>
            
            <section class="flex gap-5 font-semibold">

       <router-link to="dashboard/profile">
        <div class="bg-[#71357b] rounded-xl w-[300px] h-[130px]  text-white px-5 py-5
        hover:bg-[#7f428a] duration-700">
                <h3 class="text-xl">20</h3>
                <p class="text-sm py-2">Total Subjects</p>
                <small class="text-[17px]">Over 20 Jamb Subjects</small>
            </div>
       </router-link>

         <router-link to="dashboard/results">
          <div class="bg-[#fe7e51] rounded-xl w-[300px] h-[130px] text-white px-5 py-5
            hover:bg-[#f98b63] duration-700">
                <h3 class="text-xl">180</h3>
                <p class="text-sm py-2">Cut Off Mark</p>
                <small class="text-[17px]">5 Marks Per Question</small>
            </div>
         </router-link>

       <router-link to="dashboard/take-exam">
        <div class="bg-[#187c68] rounded-xl w-[300px] h-[130px] text-white px-5 py-5
            hover:bg-[#1f8d77] duration-700">
                <h3 class="text-xl">100</h3>
                <p class="text-sm py-2">Past Questions</p>
                <small class="text-[17px]">Per Exam</small>
            </div>
       </router-link>

            </section>

    <section class="flex justify-between">
                
        <section class="w-[400px] my-4">
            <router-link to="/take-exam">
              <p class="font-bold text-[#187c68] text-xl">Subjects</p>
            </router-link>
         <router-link to="dashboard/take-exam">
          <el-container class="!shadow-xl rounded-xl my-6 hover:bg-[#efffff] duration-700">
            <el-aside
              class="bg-gradient-to-b from-[#187c68] to-[#52f5d5] !w-[6px] rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <a href=""> <p class="text-[#187c68] text-lg">Biology</p></a>
                    <p class=" text-[#798AA3] text-sm py-4">Science Subject</p>
                  </div>
                    <p class="text-[#798AA3] text-sm">20 Questions</p>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
         </router-link>
         
         <router-link to="dashboard/take-exam">
          
          <el-container class="!shadow-xl rounded-xl  hover:bg-orange-50 duration-700">
            <el-aside
              class="bg-gradient-to-b from-[#fe7e51] to-[#eaa085] !w-[6px] rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <a href=""><p class="text-[#187c68] text-lg">Literature</p></a>
                   <p class=" text-[#798AA3] text-sm py-4">Art Subject</p>
                  </div>
                    <p class="text-[#798AA3] text-sm">20 Questions</p>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
         </router-link>

        </section>

        <section class="w-[400px] my-9">
            <router-link to="dashboard/take-exam">
              <el-container class="!shadow-xl rounded-xl my-6 hover:bg-[#ffefff] duration-700">
            <el-aside
              class="bg-gradient-to-b from-[#71357b] to-[#c242d8] !w-[6px] rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <a href=""> <p class="text-[#187c68] text-lg">Accounting</p></a>
                    <p class=" text-[#798AA3] text-xs py-5">Commercial Subject</p>
                  </div>
                    <p class="text-[#798AA3] text-sm">20 Questions</p>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
            </router-link>
        

          
          <router-link to="dashboard/take-exam">
            <el-container class="!shadow-xl rounded-xl hover:bg-[#efffff] duration-700">
            <el-aside
              class="bg-gradient-to-b from-[#187c68] to-[#52f5d5] !w-[6px] rounded-l-xl"
            ></el-aside>
            <el-container>
              <el-main class="!pt-[12px]">
                <section class="flex justify-start gap-32">
                  <div>
                    <a href=""><p class="text-[#187c68] text-lg">Physics</p></a>
                    <p class=" text-[#798AA3] text-xs py-5">Engineering Subject</p>
                  </div>
                    <p class="text-[#798AA3] text-sm">20 Questions</p>
                </section>
                
              </el-main>
            </el-container>
          </el-container>
          </router-link>
        </section>

            </section>

            
        </section>
        <!-- <div v-loading="authStore.loading">/ -->
     <router-view />
  <!-- </div> -->
    </main>
</template>