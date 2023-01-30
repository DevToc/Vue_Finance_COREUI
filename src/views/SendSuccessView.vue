<script setup>
import SuccessIcon from "@/components/Icons/SuccessIcon.vue";
import FemaleAvatarIcon from "@/components/Icons/FemaleAvatarIcon.vue";
import LineCodeIcon from "@/components/Icons/LineCodeIcon.vue";
</script>

<template>
  <div class="sendsuccess">
    <div class="banner">
      <SuccessIcon />
      <h1>Successfully</h1>
    </div>
    <div class="success-info">
      <div class="success-avatar">
        <FemaleAvatarIcon />
        <p>Loan #4444</p>
        <div class="left-mask mask"></div>
        <div class="right-mask mask"></div>
      </div>
      <div class="success-info-detail">
        <div class="detail-item">
          <label for="">Amount</label>
          <p>$30.00</p>
        </div>
        <div class="detail-item">
          <label for="">Scheduled Date </label>
          <p>April 13, 2022</p>
        </div>
        <div class="detail-item">
          <label for="">Payment Date </label>
          <p>April 13, 2022</p>
        </div>
        <div class="detail-item">
          <label for="">Payment Type </label>
          <p>Loan Fees</p>
        </div>
        <div class="detail-item">
          <label for="">Payment Method </label>
          <p>Visa</p>
        </div>
        <div class="detail-item">
          <label for="">Total </label>
          <p>$60.50</p>
        </div>
      </div>
      <div class="notes">
        <label for="">Notes</label>
        <p>None</p>
      </div>
      <div class="linecode">
        <LineCodeIcon />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sendsuccess {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24.5px;
}
.banner {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 40px;
  align-items: center;
}
.banner h1 {
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #333333;
}
.success-info {
  background-color: #eeeeee;
  padding: 20px 24px;
  width: 100%;
  margin-top: 20px;
}
.success-avatar {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  position: relative;
}
.success-avatar p {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin: 0;
}
.success-info-detail {
  padding-bottom: 16px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.62);
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}
.detail-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.detail-item label,
.notes label {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
}
.detail-item p,
.notes p {
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.notes {
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.linecode {
  margin-top: 46px;
  display: flex;
  justify-content: center;
}
.mask {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
}
.left-mask {
  bottom: 0;
  left: -50px;
}
.right-mask {
  bottom: 0;
  right: -50px;
}
</style>
