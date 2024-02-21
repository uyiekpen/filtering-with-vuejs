<script setup>
import Card from "../components/UI/Card.vue"
import data from "../data/data.json"
import { ref, computed } from "vue";

const Jobs = ref(data);
const selectedLanguage = ref('');
const selectedRole = ref('');
const selectedLevel = ref('');
const selectedContract = ref('');

const allLanguages = computed(() => getUniqueValues('languages'));
const allRoles = computed(() => getUniqueValues('role'));
const allLevels = computed(() => getUniqueValues('level'));
const allContracts = computed(() => getUniqueValues('contract'));

const filteredJobs = computed(() => {
  return Jobs.value.filter(job =>
    (!selectedLanguage.value || job.languages.includes(selectedLanguage.value)) &&
    (!selectedRole.value || job.role === selectedRole.value) &&
    (!selectedLevel.value || job.level === selectedLevel.value) &&
    (!selectedContract.value || job.contract === selectedContract.value)
  );
});

function getUniqueValues(property) {
  const valuesSet = new Set();
  Jobs.value.forEach(job => {
    const value = job[property];
    if (Array.isArray(value)) {
      value.forEach(val => valuesSet.add(val));
    } else {
      valuesSet.add(value);
    }
  });
  return ['All', ...Array.from(valuesSet)];
}
</script>

<template>
  <div class="home">
    <div class="">
      <!-- Language Dropdown -->
      <div
        class="bg-white w-[1200px] h-[80px] px-2 rounded-md shadow-md dark:bg-[#19202D] flex items-center text-[12px] -mt-8"
      >
        <select v-model="selectedLanguage" class="outline-none border-none">
          <option value="">All Languages</option>
          <option
            v-for="language in allLanguages"
            :key="language"
            :value="language"
          >
            {{ language }}
          </option>
        </select>
        <div>
          <select v-model="selectedRole" class="outline-none border-none">
            <option value="">All Roles</option>
            <option v-for="role in allRoles" :key="role" :value="role">
              {{ role }}
            </option>
          </select>
        </div>
        <div>
          <select v-model="selectedLevel" class="outline-none border-none">
            <option value="">All Levels</option>
            <option v-for="level in allLevels" :key="level" :value="level">
              {{ level }}
            </option>
          </select>
        </div>

        <div>
          <select v-model="selectedContract" class="outline-none border-none">
            <option value="">All Contracts</option>
            <option
              v-for="contract in allContracts"
              :key="contract"
              :value="contract"
            >
              {{ contract }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Display Filtered Jobs -->
    <div>
      <Card
        v-for="jobData in filteredJobs"
        :key="jobData.id"
        :jobData="jobData"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  background-color: hsl(180, 52%, 96%);
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
</style>
