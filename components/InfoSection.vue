<script setup lang="ts">
defineProps<{
  image: string;
  imageAlt: string;
  ltr?: boolean;
}>();
</script>

<template>
  <section class="grid md:grid-cols-2 gap-8">
    <img
      :src="image"
      :alt="imageAlt"
      :class="['rounded-[30px] ', ltr ? 'order-1 md:order-1' : 'order-1 md:order-none']"
    >

    <div
      class="grid gap-6 content-center"
      :class="[ltr ? 'order-none md:order-none' : 'order-none md:order-1']"
    >
      <slot name="title"></slot>

      <div class="grid gap-2">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>