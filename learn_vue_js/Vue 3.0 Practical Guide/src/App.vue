<script setup>
import NavigationList from "@components/navigation-list/NavigationList.vue";
import Header from "@/common/Header.vue";
</script>

<template>
  <div>
    <Header />
    <div class="app-wrapper">
      <div class="app-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>