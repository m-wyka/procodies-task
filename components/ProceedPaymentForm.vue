<script setup lang="ts">
import { object, string } from "yup";
import { useForm } from "vee-validate";
import ValidateTextField from "~/components/form/ValidateTextField.vue";

const formData = reactive({
  firstName: '',
  lastName: '',
  street: '',
  postalCode: '',
  city: '',
  phoneNumber: '',
  email: '',
});

const validationSchema = object({
  firstName: string().required().min(3).max(255),
  lastName: string().required().min(3).max(255),
  street: string().required().min(3).max(255),
  postalCode: string().required().min(3).max(20),
  city: string().required().min(3).max(255),
  phoneNumber: string().required().min(3).max(255),
  email: string().required().email(),
});

const { handleSubmit } = useForm({ validationSchema });

const handleFormSubmit = handleSubmit(() => {
  console.log(formData);
});

</script>

<template>
  <div class="rounded-[20px] border border-gray-100 px-[26px] py-6">
    <form @submit.prevent="handleFormSubmit">
      <div class="grid gap-6">
        <h4 class="text-center">
          Enter details
        </h4>

        <div class="grid sm:grid-cols-2 gap-4">
          <ValidateTextField
            v-model="formData.firstName"
            name="firstName"
            label="First name"
            placeholder="First name"
          />

          <ValidateTextField
            v-model="formData.lastName"
            name="lastName"
            label="Last name"
            placeholder="Last name"
          />

          <ValidateTextField
            v-model="formData.street"
            name="street"
            label="Street"
            placeholder="Street"
            class="col-span-full"
          />

          <ValidateTextField
            v-model="formData.postalCode"
            name="postalCode"
            label="Postal Code"
            placeholder="Postal Code"
          />

          <ValidateTextField
            v-model="formData.city"
            name="city"
            label="City"
            placeholder="City"
          />

          <ValidateTextField
            v-model="formData.phoneNumber"
            name="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
            class="col-span-full"
          />

          <ValidateTextField
            v-model="formData.email"
            name="email"
            label="E-mail"
            placeholder="E-mail"
            class="col-span-full"
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