<script setup>
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3 mt-10">
    <Card>
      <h2 class="font-bold text-3xl">For Developer</h2>
      <p class="font-semibold text-sm">Browse our Vue jobs and starts</p>
      <RouterLink to="/jobs" class="py-2 px-4 text-white bg-black rounded-xl">
        Browse Jobs
      </RouterLink>
    </Card>

    <Card bg="bg-emerald-200">
      <h2 class="font-bold text-3xl">For Employers</h2>
      <p class="font-semibold text-sm">List our Vue jobs</p>
      <RouterLink
        to="/jobs/add"
        class="py-2 px-4 text-white bg-emerald-500 rounded-xl"
      >
        Add Jobs
      </RouterLink>
    </Card>
  </div>
</template>
