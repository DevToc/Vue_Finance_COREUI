<script setup>
  import CheckActiveIcon from '../Icons/CheckActiveIcon.vue';
  import { CButton } from '@coreui/vue';
  import AvatarIcon from '../Icons/AvatarIcon.vue';
</script>

<template>
   <div class="contract-card">
        <div class="contract-status">
          <CheckActiveIcon />
        </div>
        <div class="contract-avatar">
          <AvatarIcon />
        </div>
        <div class="contract-info">
          <div class="contract-content">
            <h3>Yasin Ahmed</h3>
            <p>Tuesday, 23 Nov 2022</p>
          </div>
          <div class="btn-contract-wrapper">
            <CButton color="primary">View</CButton>
          </div>
        </div>
      </div>
</template>

<style scoped>
.contract-card {
  background: rgba(248, 248, 248, 0.16);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  border-radius: 10px;
  padding: 26px 10px 8px 16px;
  display: flex;
  column-gap: 19px;
  position: relative;
}
.contract-status {
  position: absolute;
  top: 11px;
  right: 10px;
}
.contract-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
}
.contract-content h3 {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  color: #100d40;
}
.contract-content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  color: #100d40;
}
.btn-contract-wrapper button {
  padding: 7px;
  font-size: 12px;
  line-height: 20px;
}
</style>