import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import DetailJobView from "@/views/DetailJobView.vue";
import AddJobsView from "@/views/AddJobsView.vue";
import EditJobsView from "@/views/EditJobsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },

    { path: "/jobs", name: "jobs", component: JobsView },

    { path: "/jobs/:id", name: "job-detail", component: DetailJobView },

    { path: "/jobs/add", name: "add-job", component: AddJobsView },

    { path: "/jobs/edit/:id", name: "edit-job", component: EditJobsView },

    { path: "/:catchAll(.*)", name: "not-found", component: NotFoundView },
  ],
});

export default router;
