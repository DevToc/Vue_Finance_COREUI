<script setup>
import { defineProps, ref } from "vue";
import ProcessingIcon from "../Icons/ProcessingIcon.vue";
import CompletedIcon from "../Icons/CompletedIcon.vue";

defineProps({
  status: String,
  name: String,
  date: String,
  amount: String,
});

const colors = ref({
  processing: "#ef3f3f",
  completed: "#57c600",
});
</script>

<template>
  <div class="transaction-card">
    <div class="transaction-status position-relative">
      <div v-if="status === 'completed'">
        <CompletedIcon />
      </div>
      <div v-else>
        <ProcessingIcon />
      </div>
      <div class="status-description">
        {{ status === "processing" ? "processing" : "completed" }}
      </div>
    </div>
    <div class="transaction-info">
      <div class="transaction-detail">
        <p class="name">{{ name }}</p>
        <p class="date">{{ date }}</p>
      </div>
      <div class="transaction-amount">
        <h3>{{ status === "completed" ? "+" : "-" }}{{ amount }} SAR</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  color: v-bind(colors[status]);
}
</style>
