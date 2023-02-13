<script setup>
import { useRouter } from "vue-router";
import SplashIcon from "@/components/Icons/SplashIcon.vue";

const router = useRouter();
setTimeout(() => {
  router.push({ name: "onboarding" });
}, 3000);
</script>

<template>
  <div class="splash">
    <SplashIcon />
    <h1 class="splash-title">DOFAAT</h1>
  </div>
</template>

<style>
.splash {
  height: 100vh;
  background-color: #100d40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}
.splash-title {
  color: white;
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
}
</style>
