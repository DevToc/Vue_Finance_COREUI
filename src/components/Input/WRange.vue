<script></script>
<template>
  <div class="range-container">
    <label for="">Number of Payments</label>
    <div class="control-container">
      <input type="range" min="0" max="100" value="10" />
    </div>
  </div>
</template>

<style scoped>
.range-container {
  display: flex;
  flex-direction: column;
}
.range-container label {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #020614;
  opacity: 0.5;
}
input[type="range"] {
  width: 100%;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
}
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  height: 1px;
  background: #999999;
}
input[type="range"]::-webkit-slider-thumb {
  position: relative;
  height: 25px;
  width: 25px;
  margin-top: -10px;
  background: #100d40;
  border-radius: 50%;
  border: 2px solid white;
}
input[type="range"]::-webkit-slider-thumb::before {
  position: absolute;
  content: "";
  height: 1px;
  width: 500px;
  left: -502px;
  top: 8px;
  background: #999999;
}
</style>
