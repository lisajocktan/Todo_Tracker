<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="text-gray-600 body-font bg-[url('/images/bg.png')]">
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center ">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-8 flex-col mb-8 pt-5 md:pt-0 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Organize your day and make progress
          effortlessly

        </h1>
        <p class="mb-8 leading-relaxed ">Become focused, organized, and calm with Todo Tracker. The to-do list website.
        </p>
        <div class="flex justify-center">
          <RouterLink to="/login">
            <button
            class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Get
            Started</button>
          </RouterLink>
      

        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

        <img class="object-cover object-center rounded" alt="hero" src="/images/time.svg">
      </div>
    </div>
    
  </section>
</template>
