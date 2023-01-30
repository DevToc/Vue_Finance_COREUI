<script setup>
import { ref } from "vue";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/vue";

import OptionIcon from "@/components/Icons/OptionIcon.vue";
import RequestIcon from "@/components/Icons/RequestIcon.vue";
import SendIcon from "@/components/Icons/SendIcon.vue";

const tabPaneActiveKey = ref(1);
</script>

<template>
  <div class="notification">
    <div class="notification-header">
      <h2>Notification</h2>
      <div class="option">
        <OptionIcon />
      </div>
      <div class="back-icon">&lt;</div>
    </div>
    <div class="tab-menu">
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            :active="tabPaneActiveKey === 1"
            @click="
              () => {
                tabPaneActiveKey = 1;
              }
            "
          >
            All Notifications
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            :active="tabPaneActiveKey === 2"
            @click="
              () => {
                tabPaneActiveKey = 2;
              }
            "
          >
            Unread
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          role="tabpanel"
          aria-labelledby="home-tab"
          :visible="tabPaneActiveKey === 1"
        >
          <div class="notification-container">
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="profile-tab"
          :visible="tabPaneActiveKey === 2"
        >
          <div class="notification-container">
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <RequestIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-image">
                  <SendIcon />
                </div>
                <div class="notification-info-detail">
                  <p class="description">You have received money from Dadi</p>
                  <p class="amount">Taison +$32.00</p>
                  <p class="date">11:00 AM</p>
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
.notification {
  height: 100vh;
}
.notification-header {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  position: relative;
}
.notification-header div {
  cursor: pointer;
}
.notification-header h2 {
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #262626;
}
.option {
  position: absolute;
  top: 0;
  right: 24px;
  z-index: 10;
}
.back-icon {
  position: absolute;
  top: 0;
  left: 24px;
  font-size: 20px;
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
  border-left: none !important;
  border-top: none !important;
  border-right: none !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #cccccc;
  border-bottom: 2px solid #c4c4c4 !important;
}
.nav-link.active {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #100d40;
  border-bottom: 4px solid #100d40 !important;
}

.notification-container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.notification-item {
  width: 100%;
  background: #f5f5f5;

  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  border-radius: 10px;
  padding: 16px;
}
.notification-info {
  display: flex;
  column-gap: 16px;
}
.notification-image {
  background-color: #ece7ff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-info-detail {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.notification-info-detail p {
  margin: 0;
}
.description,
.amount {
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #100d40;
}

.date {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
}
</style>
