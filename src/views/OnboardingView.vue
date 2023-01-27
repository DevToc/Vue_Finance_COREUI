<script setup>
import HandIcon from '@/components/Icons/HandIcon.vue';
import {CButton} from '@coreui/vue'

  
</script>

<template>
  <div class="onboarding">
    <div class="banner">
      <HandIcon/>
    </div>
    <div class="rent-pay">
      <h3 class="rent-pay-title">Rent now & Pay Later</h3>
      <p class="rent-pay-text">text text text text text text text text text text text text text text text text text text</p>
    </div>
    <div class="create-login-group">
        <CButton  color="primary" class="btn-create-account">Create Account</CButton>
        <CButton color="primary" variant="outline">
          Login Now
        </CButton>
    </div>
    
  </div>
</template>

<style lang="scss">

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

.rent-pay {
  width: 243.78px;
  text-align: center;
 
}

.rent-pay-title {
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
}
.rent-pay-text {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
}
.create-login-group{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
}
.create-login-group button {
  max-width: 390px;
  width: 100%;
  text-align: center;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  font-weight: 600;
}

</style>
