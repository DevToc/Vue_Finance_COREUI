<script setup>
import WButton from "@/components/Button/WButton.vue";
import SigninBannerIcon1 from "@/components/Icons/SigninBannerIcon1.vue";
import SigninBannerIcon2 from "@/components/Icons/SigninBannerIcon2.vue";
import WPhoneNumber from "@/components/Input/WPhoneNumber.vue";
import { useRouter } from "vue-router";
const router= useRouter();
const handleSignin = () => {
  router.push('onboarding')
}
</script>

<template>
  <div class="signin">
    <div class="signin-banner">
      <h1 class="banner-title">DOFAAT</h1>
      <div class="banner-icon1">
        <SigninBannerIcon1 />
      </div>
      <dvi class="banner-icon2">
        <SigninBannerIcon2 />
      </dvi>
    </div>
    <div class="signin-content">
      <div class="signin-title">
        <h1>Welcome Back!</h1>
      </div>
      <div class="form-wrapper">
        <form action="" class="user-info">
          <WPhoneNumber />
          <WButton color="primary" text="Sign In" @click="handleSignin" />
        </form>
      </div>
      <div class="signup-wrapper">
        <span>Don’t have an account ?<a href="signup"> Sign up</a></span>
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
  background-color: #100d40;
  padding: 60px 24px 160px 24px;
}
.banner-title {
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
}
.banner-icon1 {
  position: absolute;
  left: 0;
  bottom: 0;
}
.banner-icon2 {
  position: absolute;
  right: 0;
  bottom: 0;
}
.signin-content {
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
  row-gap: 40px;
}
.signup-wrapper {
  margin-top: 150px;
  text-align: center;
}
.signup-wrapper span {
  font-size: 12px;
  line-height: 18px;
  color: #100d40;
}
.signup-wrapper a {
  font-weight: 600;
  color: #100d40;
}
</style>
