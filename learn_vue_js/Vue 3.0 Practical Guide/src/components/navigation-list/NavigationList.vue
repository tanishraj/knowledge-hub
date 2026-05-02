<script setup>
import { ref } from "vue";
import { routes } from "@app-routes/routes";

const allRoutes = ref(routes);
</script>

<template>
  <ul>
    <template v-for="(link, index) in allRoutes" :key="index">
      <li v-if="!link.hidden">
        <RouterLink :to="link.path">{{ link.title }}</RouterLink>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
