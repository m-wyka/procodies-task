<script lang="ts" setup>
import type {InputProps} from "~/types/inputProps";

withDefaults(defineProps<InputProps>(), {
  type: 'text',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement)?.value);
};
</script>

<template>
  <label class="sr-only">{{ label }}</label>
  <input
    :value="modelValue"
    class="text-field"
    :class="{ 'text-field--error': errors.length }"
    :type="type"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<style lang="scss" scoped>
.text-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid theme('colors.gray.200');
  color: theme('colors.gray.300');
  outline: none;
  border-radius: 10px;
  transition: all 0.2s ease;

  &::placeholder {
    color: theme('colors.gray.300');
  }

  &:hover,
  &:focus {
    border-color: theme('colors.gunmetal.200');

    &::placeholder {
      color: theme('colors.gunmetal.200');
    }
  }

  &--error {
    border-color: theme('colors.red.100');

    &::placeholder {
      color: theme('colors.red.100');
    }

    &:hover,
    &:focus {
      border-color: theme('colors.red.100');

      &::placeholder {
        color: theme('colors.red.100');
      }
    }
  }
}
</style>
