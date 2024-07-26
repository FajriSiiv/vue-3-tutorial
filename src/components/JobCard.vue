<script setup>
import { RouterLink } from "vue-router";

defineProps({
  job: Object,
});
</script>

<template>
  <div class="p-4 shadow-sm rounded-xl flex flex-col gap-2 bg-emerald-100">
    <span class="font-light">{{ job.type }}</span>
    <h3 class="font-bold text-xl md:text-2xl">{{ job.title }}</h3>

    <p class="text-sm">
      {{ job.description }}
    </p>

    <span class="text-emerald-500">{{ job.salary }}</span>

    <span class="text-rose-500">{{ job.location }}</span>

    <RouterLink
      :to="'/jobs/' + job.id"
      class="max-w-[200px] rounded-xl float-right bg-emerald-500 text-center py-3 font-semibold text-white"
    >
      Read More
    </RouterLink>
  </div>
</template>
