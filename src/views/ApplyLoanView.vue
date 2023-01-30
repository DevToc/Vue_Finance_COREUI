<script setup>
import { CButton,CFormRange } from "@coreui/vue";
import CreditcardIcon from "@/components/Icons/CreditcardIcon.vue";
import {ref} from 'vue';

const title = ref(['Personal Information',"Loan Information","Financial Information",'Creditcard Information'])
const index = ref(0);
const amount = ref(0);
</script>

<template>
 <div class="apply-loan-container">
  <div class="apply-loan-header">
    <h2>Apply Loan</h2>
    <div class="back-icon">
        &lt;
    </div>
  </div>
  <div class="apply-loan-title">
      {{ title[index] }}
  </div>
  <div class="info-container">
   <div class="info-personal" v-if="index===0">
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
        <div class="form-item">
          <label for="">Birthday</label>
          <div class="birthday-wrapper">
            <input type="date" name="" id="">   
          </div>
        </div>
        <div class="form-item btn-wrapper">
          <CButton @click="()=>{index = index+1}"  color="primary" class="btn-profile">Next &gt; &gt;</CButton>
        </div>
      </form>
    </div>
   </div>
   <div class="info-loan" v-if="index===1">
      <div class="loan-amount">
        <label for="">Loan Amount (SAR)</label>
        <div class="amount-wrapper">
          <button  class="minus" @click="()=>{amount = amount-1}">
            -
          </button>
          <div class="amount">
              {{  amount}}
          </div>
          <button class="plus" @click="()=>{amount = amount+1}">
            +
          </button>
        </div>
      </div>
      <div class="loan-date">
        <div class="form-item">
          <label for="">Start Date</label>
          <div class="birthday-wrapper">
            <input type="date" name="" id="">   
          </div>
        </div>
        <div class="form-item">
          <label for="">Number of Payments</label>
            <CFormRange id="customRangerange" />  
   
        </div>
      </div>
     <div class="loan-button">
      <CButton @click="()=>{index = index+1}"  color="primary" class="btn-profile">Next &gt; &gt;</CButton>
     </div>
          
   </div>
   <div class="info-financial" v-if="index===2">
    <div class="form-wrapper" >
      <form action="" class="user-info">
        <div class="form-item">
          <label for="">Salary Amount</label>
          <input type="text" />
        </div>
        <div class="form-item">
          <label for="">Commitments Amount</label>
          <input type="text" />
        </div>
      
        <div class="form-item">
          <label for="">Copy of Sama</label>
          <input type="file" />
        </div>
        <div class="form-item">
          <label for="">Bank Statement Last 6 months</label>
          <input type="file" />
        </div>
        <div class="form-item">
          <label for="">Copy of Social Security</label>
          <input type="file" />
        </div>
      </form>
   </div>
   <div class="financial-btn">
    <CButton @click="()=>{index = index+1}"  color="primary" class="btn-profile">Next &gt; &gt;</CButton>
   </div>
  </div>
  <div class="info-creditcard" v-if="index===3">
    <div class="form-wrapper">
      <form action="">
        <div class="form-item">
          <label for="">Card Number</label>
          <div class="creditcard">
            <input type="text">
            <span class="creditcard-icon">
              <CreditcardIcon/>
            </span>
          </div>
        </div>
        <div class="form-item-wrapper">
          <div class="form-item">
            <label for="">Expired Date</label>
            <input type="text">
          </div>
          <div class="form-item">
            <label for="">CVC/CVV</label>
            <input type="text">
          </div>
        </div>
        <div class="form-item">
          <label for="">Cardholder Name</label>
          <input type="text">
        </div>
        <CButton color="primary" class="btn-finish">
            Finish
        </CButton>
      </form>
    </div>
  </div>
 </div>
 </div>

</template>

<style scoped>
.apply-loan-container{
  height: 100vh;
  padding: 25px 24px;
}
.apply-loan-header {
  display: flex;
  justify-content: center;
  position: relative;
}
.apply-loan-header h2 {
  margin: 0;
  font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;

color: #262626;

}
.back-icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
}
.apply-loan-title {
    margin-top: 30px;
    font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #333333;

}
input {
  width: 100%;
}
.info-personal {
  margin-top: 15px;
}
.btn-wrapper {
  margin-top: 230px;
}
.info-loan{
  margin-top: 10px;
}
.loan-amount {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap:16px;
  align-items: center;
}
.loan-amount label {
  font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #999999;

}
.amount-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.amount-wrapper button {
  width: 41px;
  height: 41px;
  border-radius: 50%;
  text-align: center;
  border: none;
  font-size: 20px;
}
.plus {
 background-color: #100D40;
 color: white;
}
.minus {
  background-color: #F5F5F5;
  color: #C6C6C6;
}
.amount {
  font-weight: 600;
font-size: 48px;
line-height: 72px;
/* identical to box height */

text-align: center;

color: #333333;

}

.loan-date {
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.form-range {
  background-color: white;
}
.loan-button {
  margin-top: 292px;
}
.info-financial{
  padding-top: 17px;
}
input[type="file"]::file-selector-button {
  background-image: url("../assets/upload.png");
  background-repeat: no-repeat;
  width: 25px;
  transition: 1s;
  border: none;
}
.financial-btn{
  margin-top: 155px;
}

.info-creditcard {
  margin-top: 44px;
}
.creditcard {
  position: relative;
}
.creditcard-icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
.form-item-wrapper {
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin: 20px 0px;
}
.btn-finish {
  margin-top: 300px;
}
</style>
