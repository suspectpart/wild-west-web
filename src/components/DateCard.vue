<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
}>();
</script>

<template>
  <article class="rounded bg-ww-black p-2">
    <div class="rounded bg-ww-white p-4">
      <h3 class="mb-2 flex gap-2 text-xl font-bold">
        <span>{{ date }}</span>
        <span class="text-lg"></span>
      </h3>
      <p class="mb-4">{{ title }}</p>
      <div class="flex justify-end">
        <a class="group flex items-center gap-1 text-lg font-bold" href="#">
          <span class="">Zum Termin</span>
          <!-- <img
            class="w-5 translate-y-[1px] transition-transform group-hover:translate-x-1"
            src="ui/arrow-right.svg"
            alt="Arrow Icon"
          /> -->
          <svg
            class="w-5 translate-y-[1px] transition-transform group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
