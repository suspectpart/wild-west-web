<script setup lang="ts">
// TODO: State-management for loading
import DateCard from './DateCard.vue';

interface Date {
  id: number;
  title: string;
  date: string;
}
[];

const res = await fetch('/mockdates.json');

const { dates }: { dates: Date[] } = await res.json();
</script>

<template>
  <section
    class="flex flex-col gap-8 rounded-xl bg-gradient-to-b from-purple to-dark-orange p-4 sm:p-8 xl:rounded-l-none"
  >
    <DateCard
      v-for="{ id, date, title } in dates"
      :key="id"
      :date="date"
      :title="title"
    />
  </section>
</template>
