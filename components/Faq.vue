<script setup lang="ts">
const data = ref([
  {
    title: 'How can I win?',
    content: 'Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.',
  },
  {
    title: 'No hidden fees?',
    content: 'We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.',
  },
  {
    title: 'Why do we need your billing information?',
    content: 'By joining this service, you will receive a 5-day trial of our partner\'s program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner\'s website.',
  }
]);
</script>

<template>
<section class="bg-gray-400">
  <div class="grid md:grid-cols-3 gap-8 max-w-[1232px] mx-auto px-4 py-6">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="grid gap-1 content-start"
    >
      <h5 class="text-xs font-semibold">{{ item.title }}</h5>
      <p class="text-[10px] leading-4">{{ item.content }}</p>
    </div>
  </div>
</section>
</template>