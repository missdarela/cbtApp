<script setup></script>
<template>
    <main class="">
        <section class="px-10">
            <h2 class="text-blue-900 font-bold text-xl ">Dashboard</h2>
            
            <section class="flex gap-5">

            <div class="bg-[#bec8ff] border-2 border-[#ce7100] rounded-xl w-[300px] h-[130px] text-center py-3">
                <h3 class="text-[#455068] text-[17px]">Total Subjects</h3>
                <p class="text-red-900 text-4xl">20</p>
                <small class="text-[#ce7100] text-[17px]">4 Subjects Per Exam</small>
            </div>

            <div class="bg-[#fed2d9] border-2 border-red-600 rounded-xl w-[300px] h-[130px] text-center py-3">
                <h3 class="text-[#455068] text-[17px]">Cut Off Mark</h3>
                <p class="text-red-600 text-4xl">180</p>
                <small class="text-[#ce7100] text-[17px]">45%</small>
            </div>

            <div class="bg-[#5bc5b0] border-2 border-[#ce7100] rounded-xl w-[300px] h-[130px] text-center py-3">
                <h3 class="text-[#455068] text-[17px]">Past Questions</h3>
                <p class="text-gray-800 text-4xl">100</p>
                <small class="text-[#ce7100] text-[17px]">Questions Per Exam</small>
            </div>

            </section>

            <section class="flex flex-col gap-4 text-blue-900 border-[#94a2dd] border-2 rounded-xl my-5 px-5 py-4">
                <p class="font-bold text-xl">Jamb Subjects</p>
                <small class="text-sm font-medium">Subjects</small>
                <div class="flex justify-between rounded-xl
                 px-3 py-5 bg-purple-400 text-blue-950">
                    <p>Mathematics</p>
                    <p>100 Questions</p>
                </div>

                <small class="text-sm font-medium">Art Subjects</small>
                <div class="flex justify-between rounded-xl
                 px-3 py-5 bg-yellow-300 text-blue-950">
                    <p>Literature</p>
                    <p>100 Questions</p>
                </div>
            </section>
        </section>
    </main>
</template>