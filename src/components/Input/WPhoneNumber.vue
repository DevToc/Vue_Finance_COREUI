<script setup>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import "maz-ui/css/main.css";
</script>
<template>
  <div class="phone-number-input-container">
    <label for="">Phone Number</label>
    <MazPhoneNumberInput
      color="info"
      :translations="{
        countrySelector: {
          placeholder: 'country code',
          error: 'Choose country',
        },
        phoneInput: {
          placeholder: '',
          example: '',
        },
      }"
    />
  </div>
</template>
<style>
.phone-number-input-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.phone-number-input-container label {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #020614;
  opacity: 0.5;
}
.m-input {
  padding-top: 0px !important;
}
.m-input-input {
  padding-top: 0px !important;
}
.m-input-label {
  display: none !important;
}
.m-phone-number-input {
  padding-top: 0 !important;
}
.maz-flag {
  height: 20px !important;
  background-color: white !important;
}
</style>
