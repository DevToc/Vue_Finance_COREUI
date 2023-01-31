<script setup>
import {ref} from 'vue'
import WInput from "@/components/Input/WInput.vue";
import WPhoneNumber from "@/components/Input/WPhoneNumber.vue";
import WButton from "@/components/Button/WButton.vue";
import { useRouter } from 'vue-router';

const router = useRouter()
let firstName = ref('')
let lastName = ref('');
let phoneNumber = ref('');
let nationalId = ref('');
let mtype = ref('Renter');
let agree = ref(false);

const updateFirstName = (a) => {
  firstName = a;
}

const updateLastName = (a) => {
  lastName = a;
}

const updateNumber = (a) => {
  phoneNumber = a;
}

const updateNationalId = (a) => {
  nationalId = a;
}

const handleSubmit = () => {
 if(agree.value===false) {
  return;
 }
 router.push('verifyotp')

 
}
 </script>

<template>
  <div class="signup">
    <div class="signup-title">
      <h1>Welcome !</h1>
    </div>
    <div class="form-wrapper">
      <form action="" class="user-info" @submit.prevent="handleSubmit">
        <WInput label="First Name" :text="firstName" @onchange="updateFirstName" />
        <WInput label="Last Name" :text="lastName" @onchange="updateLastName" />
        <WPhoneNumber :text="phoneNumber" @onchange = "updateNumber" />
        <WInput label="National ID" :text="nationalId" @onchange="updateNationalId"  />
        <div class="form-item type">
          <label for="">Type</label>
          <select name="" id="" v-model="mtype">
            <option value="Renter">Renter</option>
            <option value="Owner">Owner</option>
          </select>
        </div>
        <div class="form-item agree">
          <input type="checkbox" name="" id="" v-model="agree" />
          <span>I have agree to our <a href="">Terms and Condition</a></span>
        </div>
        <WButton color="primary" text="Sign Up"  />
        <div class="signin">
          <span>Already have an account? <a href="signin">Sign In</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
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
  color: #100d40;
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
.signin {
  text-align: center;
}
.signin span {
  font-size: 12px;
  line-height: 18px;
  color: #100d40;
}
.signin a {
  font-weight: 600;
  color: #100d40;
}
</style>
