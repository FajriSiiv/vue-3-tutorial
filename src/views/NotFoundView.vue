<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="w-screen min-h-[700px] flex flex-col justify-center items-center font-semibold text-emerald-500"
  >
    <h1 class="text-xl md:text-3xl">NOTHING HERE!!</h1>
    <RouterLink
      to="/"
      class="max-w-[300px] w-full mx-3 py-3 mt-10 text-center rounded-md underline"
      >Go Back</RouterLink
    >
  </div>
</template>
