<script setup lang="ts">

// Kept as basic example for .vue-component

import { ref, type Ref } from 'vue';

const count: Ref<number> = ref(0);
const animation: Ref<boolean> = ref(false);

function clickHandler() {
  count.value += 1;
  animation.value = false;
  setTimeout(() => {
    animation.value = true;
  }, 10);
}
</script>

<template>
  <div class="flex items-center gap-12 bg-[#1F1717] p-4">
    <button
      class="rounded-xl border-4 border-[#CE5A67] bg-[#F4BF96] px-4 py-2 text-black hover:bg-[#F4BF96]/90"
      @click="clickHandler"
    >
      Obligatory click counter
    </button>
    <div
      class="flex min-w-24 justify-center rounded-full bg-[#FCF5ED] p-4 text-2xl font-black"
    >
      <div :class="{ 'animate-pop': animation }">{{ count }}</div>
    </div>
  </div>
</template>
