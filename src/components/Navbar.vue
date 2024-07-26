<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const Links = [
  { name: "Home", url: "/" },
  { name: "Jobs", url: "/jobs" },
  { name: "Add Job", url: "/jobs/add" },
];

const isActiveLink = (routePath) => {
  const router = useRoute();

  return router.path === routePath;
};
</script>

<template>
  <nav class="bg-emerald-700 border-b border-green-400">
    <div class="flex h-20 items-center justify-between px-10">
      <div class="flex-1 flex items-center justify-center md:justify-start">
        <a
          href="#"
          class="flex flex-shrink-0 items-center mr-4 rounded-full border-2 border-white bg-emerald-400 w-14 h-14 justify-center text-4xl"
        >
          V
        </a>
      </div>

      <ul v-for="link in Links" :key="link">
        <li>
          <RouterLink
            :to="link.url"
            :class="[
              'py-2 px-5 hover:bg-emerald-900 text-white mx-2 rounded-md ',
              { 'bg-emerald-900': isActiveLink(link.url) },
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
