<script setup lang="ts">
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
  <div class="flex gap-12">
    <button
      class="px-4 py-2 border-red-500 border-4 bg-red-800 hover:bg-red-900 rounded-xl"
      @click="clickHandler"
    >
      Please dont't click
    </button>
    <div
      class="bg-red-300 text-2xl p-4 min-w-24 flex justify-center font-black"
    >
      <div :class="{ 'animate-pop': animation }">{{ count }}</div>
    </div>
  </div>
</template>
