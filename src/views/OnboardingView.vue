<script setup>
import HandIcon from "@/components/Icons/HandIcon.vue";
import WButton from "@/components/Button/WButton.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const handleCreate = () => {
  router.push('signup')
}
const handleLogin= () => {
  router.push('signin')
}
</script>

<template>
  <div class="onboarding">
    <div class="banner">
      <HandIcon />
    </div>
    <div class="rent-pay-text">
      <h3 class="rent-pay-title">Rent now & Pay Later</h3>
      <p class="rent-pay-text">
        text text text text text text text text text text text text text text
        text text text text
      </p>
    </div>
    <div class="create-login-group">
      <WButton color="primary" text="Create Account" @click="handleCreate" />
      <WButton color="white" text="Login Now" @click="handleLogin" />
    </div>
  </div>
</template>

<style scoped>
.onboarding {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 70px;
  padding: 0 24.5px;
}
.banner {
  margin-top: 136px;
}
.rent-pay-text {
  width: 243.78px;
  text-align: center;
}
.rent-pay-title {
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #262626;
}
.rent-pay-text {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
}
.create-login-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
}
</style>
