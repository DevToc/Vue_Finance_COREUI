<script setup>
import CreatedIcon from "@/components/Icons/CreatedIcon.vue";
import WButton from "@/components/Button/WButton.vue";
</script>

<template>
  <div class="loan-success">
    <div class="success-banner">
      <CreatedIcon />
      <h2>Successfully</h2>
    </div>
    <div class="success-description">
      <p>The amount will be reflected in your account with in few minutes</p>
    </div>
    <div class="continue-btn-wrapper">
      <WButton color="primary" class="btn-signup" text="Verify Now"></WButton>
    </div>
  </div>
</template>

<style>
.loan-success {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
}
.success-banner {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  align-items: center;
}
.success-banner h2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #100d40;
  margin: 0;
}
.success-description {
  margin-top: 25px;
  padding: 0px 15px;
  text-align: center;
}
.continue-btn-wrapper {
  margin-top: 100px;
}
</style>
