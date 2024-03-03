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
  <div class="flex items-center gap-12 bg-[#1F1717] p-4">
    <button
      class="px-4 py-2 text-black border-[#CE5A67] border-4 bg-[#F4BF96] hover:bg-[#F4BF96]/90 rounded-xl"
      @click="clickHandler"
    >
      Obligatory click counter
    </button>
    <div
      class="bg-[#FCF5ED] rounded-full text-2xl p-4 min-w-24 flex justify-center font-black"
    >
      <div :class="{ 'animate-pop': animation }">{{ count }}</div>
    </div>
  </div>
</template>
