<script setup>
import { onMounted, reactive } from "vue";
import JobCard from "./JobCard.vue";
import axios from "axios";

const state = reactive({
  jobs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  toggleClick: Function,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.log("Error Fetching Jobs", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10 mt-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-emerald-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!-- Loading State -->
      <div
        class="flex justify-center items-center w-full"
        v-if="state.isLoading"
      >
        <div class="animate-spin w-10 h-10"></div>
      </div>
      <!-- Loading State -->

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <div class="w-full flex justify-center items-center my-10">
    <button
      v-if="limit > 3 ? false : true"
      @click="toggleClick"
      class="w-[300px] text-center bg-slate-700 text-white font-semibold py-4 rounded-md"
    >
      View All Jobs
    </button>
  </div>
</template>
