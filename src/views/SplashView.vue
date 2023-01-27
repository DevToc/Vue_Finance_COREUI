<script setup>
  import SplashIcon from '@/components/Icons/SplashIcon.vue';
  
</script>

<template>
  <div class="splash">
    <SplashIcon />
    <h1 class="splash-title">DOFAAT</h1>

  </div>
</template>

<style>

.splash {
  background-color: #100D40;
  min-height: 100vh;
  height: 100vh;
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
