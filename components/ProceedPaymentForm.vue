<script setup lang="ts">
const formData = reactive({
  firstName: '',
  lastName: '',
  street: '',
  postalCode: '',
  city: '',
  phoneNumber: '',
  email: '',
});

const onSubmit = () => {
  console.log(formData);
};
</script>

<template>
  <div class="rounded-[20px] border border-gray-100 px-[26px] py-6">
    <form @submit.prevent="onSubmit">
      <div class="grid gap-6">
        <h4 class="text-center">
          Enter details
        </h4>

        <div class="grid sm:grid-cols-2 gap-4">
          <label for="firstName" class="sr-only">First name</label>
          <input
            v-model="formData.firstName"
            id="firstName"
            class="text-field col-span-1"
            type="text"
            name="firstName"
            placeholder="First name"
          />

          <label for="lastName" class="sr-only">Last name</label>
          <input
            v-model="formData.lastName"
            id="lastName"
            class="text-field col-span-1"
            type="text"
            name="lastName"
            placeholder="Last name"
          />

          <label for="street" class="sr-only">Street</label>
          <input
            v-model="formData.street"
            id="street"
            class="text-field col-span-full"
            type="text"
            name="street"
            placeholder="Street"
          />

          <label for="postalCode" class="sr-only">Postal code</label>
          <input
            v-model="formData.postalCode"
            id="postalCode"
            class="text-field col-span-1"
            type="text"
            name="postalCode"
            placeholder="Postal code"
          />

          <label for="city" class="sr-only">City</label>
          <input
            v-model="formData.city"
            id="city"
            class="text-field col-span-1"
            type="text"
            name="city"
            placeholder="City"
          />

          <label for="phoneNumber" class="sr-only">Phone number</label>
          <input
            v-model="formData.phoneNumber"
            id="phoneNumber"
            class="text-field col-span-full"
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
          />

          <label for="email" class="sr-only">E-mail</label>
          <input
            v-model="formData.email"
            id="email"
            class="text-field col-span-full"
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <Btn type="submit">Proceed to payment</Btn>
        
        <div class="flex gap-4 justify-center">
          <img src="@/assets/images/mcafee.png" alt="McAfee SECURE">
          <img src="@/assets/images/truste.png" alt="TRUSTe VERIFIED">
          <img src="@/assets/images/256bit.png" alt="256 BIT ENCRYPTION">
        </div>
      </div>
    </form>
  </div>
</template>