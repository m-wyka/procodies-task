<script setup lang="ts">
import ProceedPaymentForm from "~/components/ProceedPaymentForm.vue";
import 'vue3-carousel/dist/carousel.css';

const stockData = ref([
  { id: 1, image: 'stock_01.png', alt: 'stock_01', value: 1.99, originalValue: 500 },
  { id: 2, image: 'stock_02.jpg', alt: 'stock_02', value: 3.99, originalValue: 599, },
  { id: 3, image: 'stock_03.png', alt: 'stock_03', value: 4.99, originalValue: 659, },
  { id: 4, image: 'stock_04.jpg', alt: 'stock_04', value: 5.99, originalValue: 800, },
]);

const currentSlide = ref(0);

const slideTo = (value) => {
  currentSlide.value = value;
};
</script>

<template>
  <section>
    <div class="gallery-with-form-wrapper grid lg:grid-cols-2 gap-4">
      <div class="flex flex-wrap gap-4 items-start content-start lg:items-center lg:content-center order-1 lg:order-0 max-w-[486px] mx-auto">
        <Carousel
          id="gallery"
          class="w-full"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
        >
          <Slide v-for="slide in stockData" :key="slide.id">
            <div class="carousel__item">
              <div class="flex flex-wrap gap-2 justify-center items-center content-center size-[160px] rounded-full absolute top-0 right-0 bg-gunmetal-100">
                <p class="text-white font-bold text-[38px] leading-[44.53px]">
                  ${{ slide.value }}
                </p>

                <p class="text-white text-sm leading-4">
                  Original value ${{ slide.originalValue }}
                </p>
              </div>

              <img :src="slide.image" :alt="slide.alt">
            </div>
          </Slide>
        </Carousel>

        <Carousel
          id="thumbnails"
          class="gallery-thumbnails"
          :items-to-show="3"
          :wrap-around="false"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="slide in stockData" :key="slide.id">
            <div class="carousel__item" @click="slideTo(slide.id - 1)">
              <img
                :src="slide.image"
                :alt="slide.alt"
                :class="['carousel__img' ,{ 'carousel__img--active': currentSlide === slide.id - 1 }]"
              >
            </div>
          </Slide>
        </Carousel>
      </div>

      <div class="grid gap-6 order-0 lg:order-1">
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
</template>

<style lang="scss">
.gallery-with-form-wrapper {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 486px 1fr;
  }
}

.gallery-thumbnails {
  .carousel__track {
    grid-column-gap: 0.5rem;

    @media (min-width: 1024px) {
      grid-column-gap: 2.5rem;
    }
  }

  .carousel__slide {
    max-width: 132px;
    margin-bottom: 1px;
    border-radius: 14px;
    border: 1px solid theme('colors.gunmetal.100');

    .carousel__img {
      border-radius: 14px;
      opacity: 0.6;
      transition: opacity 0.2s ease;

      &--active {
        opacity: 1;
      }
    }
  }
}
</style>