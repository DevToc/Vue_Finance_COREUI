<script setup>
import WButton from "@/components/Button/WButton.vue";
</script>

<template>
  <div class="verify-otp">
    <div class="verify-title-wrapper">
      <h1 class="verify-title">Verify Account</h1>
      <p class="verify-description">
        Enter 4 digit code we have sent to
        <span class="verify-receiver">+6285788773880</span>
      </p>
    </div>
    <div class="verification-code">
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
    </div>
    <div class="resend-code">
      <div class="resend-description">
        <p>Haven't received verification code?</p>
      </div>
      <div class="resend-link">
        <a href="">Resend Code</a>
      </div>
    </div>
    <div class="verify-btn-wrapper">
      <WButton text="Verify Now" color="primary" />
    </div>
  </div>
</template>

<style>
.verify-otp {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
}
.verify-title-wrapper {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.verify-title {
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
}
.verify-description {
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  padding: 0 25px;
}
.verify-receiver {
  color: #333333;
}
.verification-code {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.verification-code input {
  width: 70px;
  height: 70px;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  border: none;
  border-bottom: 2px solid #100d40;
}
.verification-code input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid #100d40;
}
.resend-code {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.resend-description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #999999;
}
.resend-link a {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #100d40;
}
.verify-btn-wrapper {
  width: 100%;
  margin-top: 268px;
}
</style>
