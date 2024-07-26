<script setup>
import router from "@/router";
import axios from "axios";
import { reactive } from "vue";

const form = reactive({
  type: "Full-Time",
  title: "",
  description: "Description..",
  salary: "$40k/Year",
  location: "Indonesia, Tangerang",
  company: {
    name: "PT Indonesia Alam Abadi",
    description: "PT INDO DESCRIPTION",
    contactEmail: "alamabadi@gmail.id",
    contactPhone: "1321-7993-323",
  },
});

const handleSubmit = async () => {
  const newJob = {
    title: form.title,
    type: form.type,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const res = await axios.post(`http://localhost:5000/jobs`, newJob);

    router.push(`/jobs/${res.data.id}`);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section class="p-5">
    <h1 class="text-center">Add Job</h1>

    <form
      class="flex flex-col items-center justify-center mt-10"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        id="name"
        name="name"
        class="p-2 border border-slate-200 min-w-[400px]"
        placeholder="name a jobs"
        v-model="form.title"
      />
      <button
        type="submit"
        class="min-w-[400px] py-2 mt-5 bg-emerald-500 text-white"
      >
        Add Job
      </button>
    </form>
  </section>
</template>
