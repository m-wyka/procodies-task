<script setup lang="ts">
export interface Props {
  type: 'button' | 'submit' | 'reset';
}

withDefaults(defineProps<Props>(), {
  type: 'button',
});
</script>

<template>
  <button class="btn p-3 uppercase">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-color: theme('colors.gunmetal.100');
  border-radius: 10px;
  font-weight: 600;
  color: theme('colors.white');
}
</style>