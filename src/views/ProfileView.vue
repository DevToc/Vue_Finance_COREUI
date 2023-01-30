<script setup>
import WInput from "@/components/Input/WInput.vue";
import WBirthday from "@/components/Input/WBirthday.vue";
import WButton from "@/components/Button/WButton.vue";
</script>

<template>
  <div class="profile">
    <div class="profile-title">
      <h2>Change Personal Profile</h2>
      <div class="back-icon">&lt;</div>
    </div>
    <div class="form-wrapper">
      <form action="" class="user-info">
        <WInput label="First Name" />
        <WInput label="Last Name" />
        <WInput label="National ID" />
        <WBirthday></WBirthday>
        <div class="btn-wrapper">
          <WButton text="Update" color="primary" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.profile {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 27px 24px;
}
.profile-title {
  position: relative;
  text-align: center;
}
.back-icon {
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 0;
  font-size: 20px;
  line-height: 20px;
}
.profile-title h2 {
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
.btn-wrapper {
  margin-top: 360px;
}
</style>
