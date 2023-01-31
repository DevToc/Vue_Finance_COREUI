<script setup>
import { defineProps } from 'vue';
import SendIconVue from '../Icons/SendIcon.vue';
import RequestIconVue from '../Icons/RequestIcon.vue';
defineProps({
  name:String,
  tranType:String,
  amount:String,
  date:String

})

</script>


<template>
  <div class="notification-item">
    <div class="notification-info">
      <div class="notification-image">
        <div v-if="tranType==='send'">
          <SendIconVue/>
        </div>
        <div v-else>
            <RequestIconVue/>
        </div>
      </div>
      <div class="notification-info-detail">
        <p class="description">You have {{ tranType==="send"?"Sent":"Received" }} money {{ tranType==="send"?"to":"from" }}   <span class="info">{{ name }} {{ tranType==="send"?"-":"+" }}${{ amount }}</span> </p>
     
        <p class="date">{{date}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
.description {
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #100d40;
}
.info {
  font-weight: 600;
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