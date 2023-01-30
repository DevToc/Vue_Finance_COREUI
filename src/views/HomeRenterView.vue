<script setup>
import { ref } from "vue";
import OptionIcon from "@/components/Icons/OptionIcon.vue";
import HomeIcon from "@/components/Icons/HomeIcon.vue";
import HomeRenterBannerIcon from "@/components/Icons/HomeRenterBannerIcon.vue";

import { CButton, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/vue";

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";


const tabPaneActiveKey =  ref(1);

</script>

<template>
    <div class="home-renter">
        <div class="home-renter-header">
            <h2>Home</h2>
            <div class="option">
              <OptionIcon />
            </div>
        </div>
        <div class="tab-menu">
          <CNav variant="tabs" role="tablist">
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 1"
        @click="() => {tabPaneActiveKey = 1}"
      >
        Home
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 2"
        @click="() => {tabPaneActiveKey = 2}"
      >
      Loans Application
      </CNavLink>
    </CNavItem>
  </CNav>
  <CTabContent>
    <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
      <div class="loan-container">
          <div class="loan-item">
            <div class="loan-info">
                <div class="loan-image">
                  <HomeIcon/>
                </div>
                <div class="loan-info-detail">
                  <h6>Loan #11223</h6>
                  <p>1000 SAR</p>
                </div>
            </div>
            <div class="loan-progress">
                <CircleProgress :percent="80" :size="48" :border-width="5" :borderBgWidth="5" :fill-color="'#100D40'" :show-percent="true" />
            </div>
          </div>
      </div>
      <div class="btn-apply-wrapper">
          <CButton color="primary">Apply for Loan</CButton>

      </div>
      <div class="home-renter-banner">
        <HomeRenterBannerIcon/>
      </div>
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPaneActiveKey === 2">
      <div class="loan-application-container">
          <div class="loan-application-item">
            <div class="loan-application-info">
                <div class="loan-image">
                  <HomeIcon/>
                </div>
                <div class="loan-application-info-detail">
                  <h6>Loan #11223</h6>
                  <p>14000 SAR</p>
                  <p class="waiting">
                    Waiting Owner Signiture
                  </p>
                </div>
            </div>
          </div>
      </div>
    </CTabPane>
  </CTabContent>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.home-renter {
  height: 100vh;
}
.home-renter-header {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  position: relative;
}
.home-renter-header h2 {
  margin: 0;
  font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #262626;
}
.option {
  position:absolute;
  top: 0;
  left: 24px;
  z-index: 10;
}
.tab-menu {
  margin-top: 30px;
}
.nav-tabs {
  border: none;
}
.tab-content {
  padding: 24px;
}
.nav-item {
  width: 50%;
  text-align: center;
}
.nav-link {
  border-left:none !important;
  border-top:none !important;
  border-right:none !important;
  font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #CCCCCC;
border-bottom:  2px solid #C4C4C4 !important;
}
.nav-link.active {
  font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #100D40;
border-bottom: 4px solid #100D40 !important;
}

.loan-item {
  width: 100%;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
border-radius: 10px;
padding: 16px;
display: flex;
align-items: center;
justify-content: space-between;
}
.loan-info {
  display: flex;
  column-gap: 20px;
  align-items: center;
}
.loan-image {
  background-color: #F2F2F2;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loan-info-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.loan-info-detail h6, .loan-application-info-detail h6 {
  margin: 0;
  font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


color: #100D40;
}
.loan-info-detail p,.loan-application-info-detail p {
  margin: 0;
  font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #333333;
}
.loan-progress {
  width: 48px;
  height: 48px;
}
.btn-apply-wrapper {
  width: 100%;
  margin-top: 14px;

}
.home-renter-banner {
  display: flex;
  justify-content: center;
  margin-top: 74px;
}
.loan-application-item{
  background: #FFFFFF;
/* shadow card */

box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
border-radius: 10px;
padding: 17px;
width: 100%;
}
.loan-application-info{
  display: flex;
  column-gap: 18px;
}
.loan-application-info-detail{
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.waiting {
  font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #FEB756 !important;
}

</style>
