<script setup>
import { CButton } from "@coreui/vue";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
</script>

<template>
  <div class="signup">
    <div class="signup-title">
      <h1>Welcome !</h1>
    </div>
    <div class="form-wrapper">
      <form action="" class="user-info">
        <div class="form-item">
          <label for="">First Name</label>
          <input type="text" />
        </div>
        <div class="form-item">
          <label for="">Last Name</label>
          <input type="text" />
        </div>
        <div class="form-item">
          <label for="">Phone Number</label>
          <VueTelInput />
        </div>
        <div class="form-item">
          <label for="">National ID</label>
          <input type="text" />
        </div>
        <div class="form-item type">
          <label for="">Type</label>
          <select name="" id="">
            <option value="">Renter</option>
            <option value="">Renter2</option>
          </select>
        </div>
        <div class="form-item agree">
          <input type="checkbox" name="" id="" />
          <span>I have agree to our <a href="">Terms and Condition</a></span>
        </div>
        <div class="form-item">
          <CButton  color="primary" class="btn-signup">Sign Up</CButton>
        </div>
        <div class="form-item signin">
          <span>Already have an account?  <a href="">Sign In</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.signup {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 47px;
  padding: 0 24.5px;
}
.signup-title {
  margin-top: 91px;
}
.signup-title h1 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: #333333;
}
.form-wrapper {
  width: 100%;
}
.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 19px;
}

.form-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.form-item label {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #020614;
  opacity: 0.5;
}
.form-item input {
  widows: 100%;
  background-color: #f7f7f7;
  padding: 14px 16px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #100d40;
}
.form-item input:focus {
  widows: 100%;
  background-color: white;
  border: 1px solid #0f0d2333;
  outline: none;
}
.vue-tel-input {
  padding: 5px 10px;
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
.form-item select {
  background-color: #f7f7f7;
  padding: 14px 15px;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  appearance: none;
}
.form-item select:focus {
  background-color: white;
  border: 1px solid #0f0d2333;
}
.type {
  position: relative;
}
.type::before {
  content: "";
  background-image: url("../assets/arrow.svg");
  bottom: 16px;
  right: 10px;
  position: absolute;
  z-index: 10;
  width: 16px;
  height: 10px;
}
.agree {
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
  line-height: 19px;
  color: #100D40;
  margin: 10px 0;
}
.agree a {
  color: #333333;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 1px solid #0f0d2333;
  border-radius: 4px;
}

.btn-signup{
  max-width: 390px;
  width: 100%;
  padding: 16px 20px !important;
  font-size: 16px !important;
  line-height: 24px !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
}
.signin {
  text-align: center;
}
.signin span {
  font-size: 12px;
  line-height: 18px;
  color:#100D40
}
.signin a {
  font-weight: 600;
  color: #100D40;
}
</style>
