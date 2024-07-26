<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListing from "@/components/JobListing.vue";

import { ref } from "vue";

const limit = ref(3);

const limitJosb = () => {
  limit.value = 20;
  return limit.value;
};
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListing :limit="limit" :showButton="true" :toggleClick="limitJosb" />
</template>
