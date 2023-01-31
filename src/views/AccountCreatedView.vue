<script setup>
import WButton from "@/components/Button/WButton.vue";
import CreatedIcon from "@/components/Icons/CreatedIcon.vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const handleContinue = () => {
  router.push('/signin')
}

</script>

<template>
  <div class="account-created">
    <div class="created-wrapper">
      <h1 class="created">Account Created</h1>
      <p class="created-description">
        Your account has been created successfully. Press continue to continue
        using the app
      </p>
    </div>
    <div class="created-banner">
      <CreatedIcon />
    </div>
    <div class="continue-btn-wrapper">
      <WButton color="primary" text="Continue" @click="handleContinue" />
      <div class="continue-description">
        <p>
          By Clicking continue, you agree to our <br />
          <a href="">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.account-created {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 23px;
}
.created-wrapper {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.created {
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
}
.created-description {
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
}
.created-banner {
  margin: 85px auto;
}
.continue-btn-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.continue-description {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: #100d40;
}
.continue-description a {
  color: #333333;
  font-weight: 600;
}
</style>
