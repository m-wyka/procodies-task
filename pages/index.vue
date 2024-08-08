<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-[1232px]">
    <section>
      <div class="lorem grid grid-cols-2 gap-4">
        <div class="max-w-[486px]">1</div>

        <div class="grid gap-6">
          <div class="grid gap-2">
            <h1>
              Chance to win a StockX Mystery Box today!
            </h1>

            <p class="text-[22px]">
              Unleash the Excitement of Mystery Electronics
            </p>
          </div>

          <ProceedPaymentForm />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.lorem {
  grid-template-columns: 486px 1fr;
}
</style>