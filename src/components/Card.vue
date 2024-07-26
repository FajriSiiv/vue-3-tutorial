<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-slate-200",
  },
});
</script>

<template>
  <div :class="`flex flex-col gap-2 rounded-md ${bg} px-10 py-5`">
    <slot></slot>
  </div>
</template>
