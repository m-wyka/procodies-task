<script setup lang="ts">
import GalleryWithForm from "~/components/GalleryWithForm.vue";
import InfoBanner from "~/components/InfoBanner.vue";
import Faq from "~/components/Faq.vue";
import AcceptableCreditCards from "~/components/AcceptableCreditCards.vue";
</script>

<template>
  <div class="grid gap-12">
    <div class="grid gap-12 max-w-[1232px] mx-auto px-4">
      <GalleryWithForm />
      <InfoBanner />

      <InfoSection image="/stock_05.png" image-alt="stock_05">
        <template #title>
          <h3>Curious about the <span class="text-gunmetal-100">StockX</span> Mystery Box?</h3>
        </template>

        <template #content>
          <p>
            Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.
          </p>

          <p>
            Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.
          </p>
        </template>
      </InfoSection>

      <InfoSection
        image="/stock_06.png"
        image-alt="stock_06"
        :ltr="true"
      >
        <template #title>
          <h3>Why is everyone buzzing about these boxes?</h3>
        </template>

        <template #content>
          <p>
            StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.
          </p>

          <p>
            Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!
          </p>
        </template>
      </InfoSection>
    </div>

    <Faq />
  </div>

  <AcceptableCreditCards class="mt-4" />
</template>