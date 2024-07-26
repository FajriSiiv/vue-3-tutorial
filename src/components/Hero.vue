<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Become a Vue Dev",
  },
});
</script>

<template>
  <section
    class="h-[30vh] max-h-[300px] bg-emerald-700 text-white flex justify-center items-center"
  >
    <h1 class="text-5xl font-bold">
      {{ title }}
    </h1>
  </section>
</template>
