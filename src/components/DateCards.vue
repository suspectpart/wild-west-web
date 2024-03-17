<script setup lang="ts">
import arrow from '@assets/icons/arrow-right.svg';

interface Date {
  id: number;
  date: string;
  title: string;
  text: string;
}
[];

const res = await fetch('/mockdates.json');

const { dates }: { dates: Date[] } = await res.json();
</script>

<template>
  <article
    v-for="{ id, date, title, text } in dates"
    :key="id"
    class="rounded bg-ww-black p-2"
  >
    <div class="flex flex-col gap-2 rounded bg-ww-white p-4">
      <h3 class="flex gap-2 text-xl font-bold">
        <span class="font-light">{{ date }}</span>
        <span>{{ title }}</span>
      </h3>
      <div
        class="mb-1 flex flex-col items-start justify-center gap-1 opacity-50 xl:items-center"
      >
        <div class="h-[2px] w-24 bg-ww-black/75"></div>
        <div class="h-[2px] w-12 bg-ww-black/75"></div>
      </div>
      <p class="mb-4">{{ text }}</p>
      <div class="flex justify-end">
        <a class="group flex items-center gap-1 text-sm font-bold" href="#">
          <span>Zum Termin</span>
          <img
            class="w-5 transition-transform group-hover:translate-x-1"
            :src="arrow.src"
            alt="Arrow Icon"
          />
        </a>
      </div>
    </div>
  </article>
</template>
