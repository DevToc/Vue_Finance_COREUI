<script setup>
import { CButton } from "@coreui/vue";
// import {BFormDatepicker} from 'bootstrap-vue'
// import { VueTelInput } from "vue3-tel-input";
// import "vue3-tel-input/dist/vue3-tel-input.css";
</script>

<template>
  <div class="bank">
    <div class="bank-title">
      <div class="back-icon">
          &lt;
      </div>
      <div class="title-content">
        <h2>Change Personal bank</h2> 
      </div>
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
          <label for="">National ID</label>
          <input type="text" />
        </div>
    
     
        <div class="form-item btn-wrapper">
          <CButton  color="primary" class="btn-bank">Update</CButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bank {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 27px 24px;
}
.bank-title {
  display: flex;
  column-gap: 50px;
}
.back-icon{
  font-size: 20px;
  line-height: 20px;
}
.bank-title h2 {
 font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #262626;
}
.form-wrapper {
  margin-top: 26px;
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
  width: 100%;
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

.birthday-wrapper {
 
  width: 100%;
  position: relative;
}
.btn-wrapper {
  margin-top: 275px;
}
</style>
