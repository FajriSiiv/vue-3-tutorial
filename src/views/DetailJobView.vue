<script setup>
import router from "@/router";
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm("Are you sure want delete this job?");
    if (confirm) {
      await axios.delete(`http://localhost:5000/jobs/${jobId}`);
      router.push("/jobs");
    }
  } catch (error) {
    console.log("Error deleted jobs", erorr);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.log(error, "ERROR FETCHING DATA!!", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section
    v-if="!state.isLoading"
    class="flex flex-col gap-3 p-10 justify-center items-center"
  >
    <div class="flex flex-col gap-1 bg-emerald-100 rounded-md p-5">
      <span class="font-semibold">{{ state.job.type }}</span>
      <h1 class="text-2xl">{{ state.job.title }}</h1>
      <p class="text-sm">
        {{ state.job.description }}
      </p>

      <div class="mt-10 flex flex-col bg-emerald-100 rounded-md gap-1">
        <span class="text-xl text-emerald-500"
          >Salary :{{ state.job.salary }}</span
        >
        <span class="text-xl text-emerald-500"
          >Location :{{ state.job.location }}</span
        >
      </div>
      <div class="mt-10 flex flex-col bg-emerald-100 rounded-md gap-1">
        <span class="text-xl">Contact Email:</span>
        <span class="font-bold text-sm">{{
          state.job.company.contactEmail
        }}</span>
        <span class="text-xl">Contact Phone:</span>
        <span class="font-bold text-sm">{{
          state.job.company.contactPhone
        }}</span>
      </div>

      <div
        class="mt-10 flex flex-wrap bg-emerald-100 rounded-md gap-1 justify-center"
      >
        <RouterLink
          :to="`/jobs/edit/${state.job.id}`"
          class="py-3 max-w-[300px] w-full text-center text-white font-bold bg-emerald-500"
        >
          Edit Job
        </RouterLink>
        <button
          @click="deleteJob"
          class="py-3 max-w-[300px] w-full text-center text-white font-bold bg-rose-500"
        >
          Delete Job
        </button>
      </div>
    </div>
  </section>
  <div v-else>
    <h1 class="text-4xl text-center">Loading....</h1>
  </div>
</template>
