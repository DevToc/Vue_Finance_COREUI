<script setup>
import {ref} from 'vue'
import WButton from "@/components/Button/WButton.vue";
import WInput from "@/components/Input/WInput.vue";
import { useRouter } from 'vue-router';
const router = useRouter()

const handleBack = () => {
  router.back()
}

let accountNumber = ref('')
let IBAN = ref('')
let bankName = ref('')

const updateAccountNumber = (a) => {
  accountNumber = a;
}
const updateIBAN = (a) => {
  IBAN = a;
}
const updateBankName = (a) => {
  bankName = a;
}

const handleUpdate = () => {
  alert('update');
}
</script>

<template>
  <div class="bank">
    <div class="bank-title">
      <div class="back-icon" @click="handleBack">&lt;</div>
      <h2>Change Banking Details</h2>
    </div>
    <div class="form-wrapper">
      <form action="" @submit.prevent="handleUpdate" class="user-info">
        <WInput label="Account Number" :text="accountNumber" @onchange="updateAccountNumber" />
        <WInput label="IBAN" :text="IBAN" @onchange="updateIBAN" />

        <WInput label="Bank Name" :text="bankName" @onchange="updateBankName" />
        <div class="btn-wrapper">
          <WButton text="Update" color="primary" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bank {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 27px 24px;
}
.bank-title {
  position: relative;
  text-align: center;
}
.back-icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  line-height: 20px;
}
.bank-title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #262626;
}
.form-wrapper {
  margin-top: 26px;
  width: 100%;
}
.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 19px;
}
.btn-wrapper {
  margin-top: 275px;
}
</style>
