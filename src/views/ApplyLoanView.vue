<script setup>
import { ref } from "vue";
import WInput from "@/components/Input/WInput.vue";
import WBirthday from "@/components/Input/WBirthday.vue";
import WButton from "@/components/Button/WButton.vue";
import WRange from "@/components/Input/WRange.vue";
import WFile from "@/components/Input/WFile.vue";
import WInputWIthIcon from "@/components/Input/WInputWIthIcon.vue";

const title = ref([
  "Personal Information",
  "Loan Information",
  "Financial Information",
  "Creditcard Information",
]);

const index = ref(0);
const amount = ref(0);

//////////////////////////////////////
let firstName = ref("");
let lastName = ref("");
let nationalId = ref("");
let birthday = ref("");
const updateFirstName = (a) => {
  firstName = a;
};
const updateLastName = (a) => {
  lastName = a;
};
const updateNationalId = (a) => {
  nationalId = a;
};
const updateBirthday = (a) => {
  birthday = a;
  console.log(a);
};
//////////////////////////////
let startDate = ref("");
const updateStartDate = (a) => {
  startDate = a;
  console.log(a);
};
//////////////////////////
let salaryAmount = ref("");
let commitAmount = ref("");
let sama = ref("");
let bankStatement = ref("");
let socialSecurity = ref("");
const updateSalaryAmount = (a) => {
  salaryAmount = a;
};
const updateCommitAmount = (a) => {
  commitAmount = a;
};
const updateSama = (a) => {
  console.log(a);
  sama = a;
};
const updateBankStatement = (a) => {
  bankStatement = a;
};
const updateSocialSecurity = (a) => {
  socialSecurity = a;
};
/////////////////////////////////
let cardNumber = ref("");
let expiredDate = ref("");
let CVC = ref("");
let cardName = ref("");
const updateCardNumber = (a) => {
  cardNumber = a;
};
const updateExpiredDate = (a) => {
  expiredDate = a;
};
const updateCVC = (a) => {
  CVC = a;
};
const updateCardName = (a) => {
  cardName = a;
};
const handleFinish = () => {};
/////////////////////////////////
</script>

<template>
  <div class="apply-loan-container">
    <div class="apply-loan-header">
      <h2>Apply Loan</h2>
      <div class="back-icon">&lt;</div>
    </div>
    <div class="apply-loan-title">
      {{ title[index] }}
    </div>
    <div class="info-container">
      <div class="info-personal" v-if="index === 0">
        <div class="form-wrapper">
          <form action="" class="user-info">
            <WInput
              label="First Name"
              :text="firstName"
              @onchange="updateFirstName"
            ></WInput>
            <WInput
              label="Last Name"
              :text="lastName"
              @onchange="updateLastName"
            ></WInput>
            <WInput
              label="National ID"
              :text="nationalId"
              @onchange="updateNationalId"
            ></WInput>
            <WBirthday :text="birthday" @onchange="updateBirthday" />
            <div class="form-item btn-wrapper">
              <WButton
                @click="
                  () => {
                    index = index + 1;
                  }
                "
                color="primary"
                text="Next &gt; &gt;"
              ></WButton>
            </div>
          </form>
        </div>
      </div>
      <div class="info-loan" v-if="index === 1">
        <div class="loan-amount">
          <label for="">Loan Amount (SAR)</label>
          <div class="amount-wrapper">
            <button
              class="minus"
              @click="
                () => {
                  amount = amount - 1;
                }
              "
            >
              -
            </button>
            <div class="amount">
              {{ amount }}
            </div>
            <button
              class="plus"
              @click="
                () => {
                  amount = amount + 1;
                }
              "
            >
              +
            </button>
          </div>
        </div>
        <div class="loan-date">
          <WBirthday
            label="Start date"
            :text="startDate"
            @onchange="updateStartDate"
          />
          <WRange />
        </div>
        <div class="loan-button">
          <WButton
            @click="
              () => {
                index = index + 1;
              }
            "
            color="primary"
            text="Next &gt; &gt;"
          ></WButton>
        </div>
      </div>
      <div class="info-financial" v-if="index === 2">
        <div class="form-wrapper">
          <form action="" class="user-info">
            <WInput
              label="Salary Amount"
              :text="salaryAmount"
              @onchange="updateSalaryAmount"
            ></WInput>
            <WInput
              label="Commitments Amount"
              :text="commitAmount"
              @onchange="updateCommitAmount"
            ></WInput>
            <WFile
              label="Copy of Sama"
              :text="sama"
              @change="updateSama"
            ></WFile>
            <WFile
              label="Bank Statement Last 6 months"
              :text="bankStatement"
              @onchange="updateBankStatement"
            ></WFile>
            <WFile
              label="Copy of Social Security"
              :text="socialSecurity"
              @onchange="updateSocialSecurity"
            ></WFile>
          </form>
        </div>
        <div class="financial-btn">
          <WButton
            @click="
              () => {
                index = index + 1;
              }
            "
            color="primary"
            text="Next &gt; &gt; "
          ></WButton>
        </div>
      </div>
      <div class="info-creditcard" v-if="index === 3">
        <div class="form-wrapper">
          <form action="" @submit.prevent="handleFinish">
            <WInputWIthIcon :text="cardNumber" @onchange="updateCardNumber" />
            <div class="form-item-wrapper">
              <WInput
                label="Expired Date"
                :text="expiredDate"
                @onchange="updateExpiredDate"
              />
              <WInput label="CVC/CVV" :text="CVC" @onchange="updateCVC" />
            </div>
            <WInput
              label="Cardholder Name"
              @onchange="updateCardName"
              :text="cardName"
            />
            <WButton color="primary" text="Finish" class="btn-finish">
            </WButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apply-loan-container {
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
.info-personal {
  margin-top: 15px;
}
.btn-wrapper {
  margin-top: 230px;
}
.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.info-loan {
  margin-top: 10px;
}
.loan-amount {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
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
  background-color: #100d40;
  color: white;
}
.minus {
  background-color: #f5f5f5;
  color: #c6c6c6;
}
.amount {
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  text-align: center;

  color: #333333;
}
.loan-date {
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.loan-button {
  margin-top: 292px;
}
.info-financial {
  padding-top: 17px;
}
.financial-btn {
  margin-top: 155px;
}
.info-creditcard {
  margin-top: 44px;
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
