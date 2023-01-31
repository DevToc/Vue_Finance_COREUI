<script setup>
import { CBadge } from "@coreui/vue";

import OptionIcon from "@/components/Icons/OptionIcon.vue";
import BellIcon from "@/components/Icons/BellIcon.vue";
import BalanceIcon from "@/components/Icons/BalanceIcon.vue";
import WTransaction from "@/components/Card/WTransaction.vue";

import { useRouter } from "vue-router";

const router = useRouter();
const handleNotify = () => {
  router.push('notification')
}
</script>

<template>
  <div class="home">
    <div class="home-header">
      <div class="home-men">
        <OptionIcon />
      </div>
      <div class="name-wrapper">
        <p class="welcome">Welcome back</p>
        <p class="name">Ahmed</p>
      </div>
      <div class="notification">
        <div color="primary" class="notify position-relative pointer" @click="handleNotify">
          <BellIcon />
          <CBadge
            class="border border-light p-1 bell"
            color="danger"
            position="top-end"
            shape="rounded-circle"
          >
            <span class="visually-hidden">N</span>
          </CBadge>
        </div>
      </div>
    </div>
    <div class="balance-card">
      <div class="balance-info">
        <div class="balance-title">
          <BalanceIcon />
          <p>My Balance</p>
        </div>
        <div class="balance-amount">
          <p>15032 SAR</p>
        </div>
      </div>
      <div class="withdraw-wrapper">Withdraw</div>
    </div>
    <div class="transactions-wrapper">
      <h3>Latest Transactions</h3>
      <div class="transactions">
        <WTransaction status="processing" name="KKKKKK" date="Tuesday, 23 Nov 2022" amount="488" />
        <WTransaction status="completed" name="KKKKKK" date="Tuesday, 23 Nov 2022" amount="488" />
        <WTransaction status="completed" name="Ahmed Mohammed" date="Tuesday, 23 Nov 2022" amount="488" />
     
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  padding: 20px 24px;
  background-image: url("../assets/home.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.home-header {
  display: flex;
  justify-content: space-between;
}
.name-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name-wrapper .welcome {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.72);
}
.name-wrapper .name {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
}
.bell {
  top: 7px !important;
  right: 10px !important;
  left: 18px !important;
}
.notify {
  cursor: pointer;
}
.balance-card {
  margin-top: 38px;
  width: 100%;
  background: #ffffff;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  border-radius: 10px;
  padding: 18px 12px;
}
.balance-info {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 10px;
}
.balance-title {
  column-gap: 5px;
  display: flex;
  align-items: center;
}
.balance-title p {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #100d40;
}
.balance-amount p {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #100d40;
}
.withdraw-wrapper {
  text-align: center;
  padding-top: 11px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ef3f3f;
}
.transactions-wrapper {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}
.transactions-wrapper h3 {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #999999;
}

.transactions {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
}
.transaction-card {
  background: #ffffff;
  width: 100%;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  border-radius: 10px;
  padding-right: 15px;
  display: flex;
}
.status-description {
  position: absolute;
  top: 16px;
  left: -2px;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  color: #ffffff;
  transform: rotate(-45deg);
}
.transaction-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.transaction-detail .name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #100d40;
}
.transaction-detail .date {
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #100d40;
}

.transaction-amount h3 {
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #57c600;
}
.processing h3 {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ef3f3f;
}
</style>
