<template>
  <div
    class="font-Poppins"
  >
    <SiteNavigation />
  
    <RouterView />

  </div>
</template>

<script setup>

import SiteNavigation from "./components/SiteNavigation.vue";

import { RouterView } from 'vue-router'
</script>

