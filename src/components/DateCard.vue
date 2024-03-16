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
          <img
            class="w-5 translate-y-[1px] transition-transform group-hover:translate-x-1"
            src="../assets/icons/arrow-right.svg"
            alt="Arrow Icon"
          />
        </a>
      </div>
    </div>
  </article>
</template>
