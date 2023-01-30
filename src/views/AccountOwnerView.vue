<script setup>
import UserIcon from "@/components/Icons/UserIcon.vue";
import MailIcon from "@/components/Icons/MailIcon.vue";
import WButton from "@/components/Button/WButton.vue";
</script>

<template>
  <div class="account-owner">
    <div class="account-owner-wrapper">
      <h1 class="account-owner-title">Account</h1>
    </div>
    <div class="card-wrapper">
      <div class="normal-card">
        <div class="icon-title">
          <div class="card-icon">
            <UserIcon />
          </div>
          <div class="card-title">Change Personal Profile</div>
        </div>
        <div class="left-arrow">
          <span>&gt;</span>
        </div>
      </div>
      <div class="normal-card">
        <div class="icon-title">
          <div class="card-icon">
            <MailIcon />
          </div>
          <div class="card-title">Change Language</div>
        </div>
        <div class="left-arrow">
          <span>&gt;</span>
        </div>
      </div>
      <div class="normal-card">
        <div class="icon-title">
          <div class="card-icon">
            <MailIcon />
          </div>
          <div class="card-title">Change Bank Details</div>
        </div>
        <div class="left-arrow">
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <div class="logout-btn-wrapper">
      <WButton text="Logout" color="primary" />
    </div>
  </div>
</template>

<style scoped>
.account-owner {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 43px 24px 20px 24px;
}
.account-owner-title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 18px;
  color: #333333;
}
.card-wrapper {
  margin: 47px;
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 16px;
}
.normal-card {
  background-color: #ffffff;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  border-radius: 10px;
}
.icon-title {
  display: flex;
  column-gap: 16px;
  align-items: center;
}
.card-icon {
  background-color: #f1edff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-title {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
}
.left-arrow {
  font-size: 24px;
  line-height: 30px;
}
.logout-btn-wrapper {
  width: 100%;
  margin-top: 400px;
}
</style>
