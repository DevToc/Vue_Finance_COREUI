<script setup>
import { CButton } from "@coreui/vue";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
import SigninBannerIcon1 from "@/components/Icons/SigninBannerIcon1.vue";
import SigninBannerIcon2 from "@/components/Icons/SigninBannerIcon2.vue";

</script>

<template>
  <div class="signin">
    <div class="signin-banner">
        <h1 class="banner-title">DOFAAT</h1>
        <div class="banner-icon1">
          <SigninBannerIcon1/>
        </div>
        <dvi class="banner-icon2">
          <SigninBannerIcon2/>
        </dvi>
    </div>
    <div class="signin-content">
      <div class="signin-title">
      <h1>Welcome Back!</h1>
    </div>
    <div class="form-wrapper">
      <form action="" class="user-info">
        <div class="form-item">
          <label for="">Phone Number</label>
          <VueTelInput />
        </div>
        <div class="form-item">
          <CButton  color="primary" class="btn-signin">Sign Up</CButton>
        </div>
      </form>
    </div>
    <div class="signup-wrapper">
      <span>Don’t have an account ?<a href=""> Sign up</a></span>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signin {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.signin-banner {
  position: relative;
  width: 100%;
  background-color: #100D40;
  padding: 60px 24px 160px 24px;
}
.banner-title {
  text-align: left;
  font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
}
.banner-icon1{
  position: absolute;
  left: 0;
  bottom: 0;
}
.banner-icon2{
  position: absolute;
  right: 0;
  bottom: 0;
}

.signin-content {
  background-color: #C4C4C4;
  padding: 32px 24px;
  width: 100%;
}

.signin-title h1 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: #333333;
}
.form-wrapper {
  width: 100%;
  margin-top: 37px;
}
.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 19px;
}

.form-item {
  display: flex;
  flex-direction: column;
  // justify-content: start;
  align-items: start;
}
.form-item label {
  margin-left: 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #020614;
  opacity: 0.5;
}

.vue-tel-input {
  padding: 5px 10px;
  width: 100%;
  // max-width: 390px;
}
.vue-tel-input:focus-within {
  box-shadow: none;
}

.vue-tel-input input {
  border: none;
  border-left: 1px solid #cccccc;
  background-color: white;
  border-radius: none;
  padding: 10px 15px;
}

.vue-tel-input input::placeholder {
  color: transparent;
}

.vue-tel-input input:focus {
  border: none;
  border-left: 1px solid #cccccc;
  background-color: white;
  border-radius: none;
}
.vti__dropdown-item {
  width: 300px !important;
  // overflow: hidden;
}
.signup-wrapper {
  margin-top: 150px;
  text-align: center;
}
.signup-wrapper span {
  font-size: 12px;
  line-height: 18px;
  color:#100D40
}
.signup-wrapper a {
  font-weight: 600;
  color: #100D40;
}
</style>
