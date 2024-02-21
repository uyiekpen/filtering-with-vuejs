<script setup>

import {defineProps} from 'vue'


const { jobData } = defineProps(['jobData']);
</script>

<template>
  
  <div
    class="h-[100px] w-[1200px]  bg-white mt-6 flex justify-between items-center rounded-md shadow-md"
  >
    <div class="flex w-[350px]  px-8  ">
      <div class="h-[50px] w-[50px] bg-black rounded-[100%]">
        <img :src="jobData.logo" />
      </div>
      <div class="flex justify-between  flex-col px-2 leading-3">
        <div class="flex ">
          <span
            class="text-[#5BA4A4] text-[12px]  font-bold"
            >{{jobData.company}}</span
          >
          <span
            v-if="jobData.new"
            class="bg-[#5BA4A4] text-white text-[10px] text-center  rounded-2xl px-2 uppercase ml-1"
            >New</span
          >
          <span
            v-if="jobData.featured"
            class="bg-black text-white text-[10px] text-center  rounded-2xl px-2 uppercase ml-1"
            >Featured</span
          >
        </div>
        <div class="text-[12px] font-bold">
          {{ jobData.position }}
        </div>
        <div class="text-[10px]">
          <span>{{jobData.postedAt}}.</span>
          <span class="ml-1">{{jobData.contract}}</span>
          <span class="ml-1">{{jobData.location}}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex w-[200px] justify-evenly text-[10px] text-[#5BA4A4] font-bold ">
        <span class="bg-[#EEF6F6] p-1" v-for="(language, index) in jobData.languages" :key="index">
          {{ language }}
        </span>
      </div>
    </div>
  </div>
</template>
