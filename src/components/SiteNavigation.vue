<template>
  <nav class=" border-gray-200 dark:bg-gray-900 z-50">
    <RouterLink :to="{ name: 'home' }">
      <div class="shadow-lg p-4 flex justify-center">
        <img src="/images/logo.svg" class="h-12" alt="Todo Logo" />
      </div>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

