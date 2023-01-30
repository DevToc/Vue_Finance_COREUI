<script setup>
import WInput from "@/components/Input/WInput.vue";
import WPhoneNumber from "@/components/Input/WPhoneNumber.vue";
import WButton from "@/components/Button/WButton.vue";
</script>

<template>
  <div class="signup">
    <div class="signup-title">
      <h1>Welcome !</h1>
    </div>
    <div class="form-wrapper">
      <form action="" class="user-info">
        <WInput label="First Name" />
        <WInput label="Last Name" />
        <WPhoneNumber />
        <WInput label="National ID" />
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
        <WButton color="primary" text="Sign Up" />
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
