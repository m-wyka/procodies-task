<script lang="ts" setup>
import { useField } from "vee-validate";
import TextField from "~/components/form/TextField.vue";
import type { InputProps } from "~/types/inputProps";

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const name = toRef(props, 'name');

const { value: inputValue, errors } = useField(name, undefined, {
  initialValue: props.modelValue,
});

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);
</script>

<template>
  <div class="grid gap-1 content-start w-full">
    <TextField
      :model-value="inputValue"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :label="label"
      :errors="errors"
      @update:model-value="(value) => emit('update:modelValue', value)"
    />

    <p
      v-show="!!errors.length"
      class="text-red-100 text-xs"
    >
      {{ errors[0] }}
    </p>
  </div>
</template>