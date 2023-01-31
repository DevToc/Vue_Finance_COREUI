<script setup>
  import { defineProps, ref, defineEmits } from 'vue';
  
  let file = ref(null)
  const emit = defineEmits(['onchange'])
  defineProps({
    label:String
  })

 const update = () => {
  emit('onchange',file.value.files[0])
 }
</script>

<template>
    <div class="input-wrapper">
          <label for="">{{ label }}</label>
          <input type="file" @change="update" ref="file" />
        </div>
</template>

<style scoped>
.input-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.input-wrapper label {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #020614;
  opacity: 0.5;
}
.input-wrapper input {
  widows: 100%;
  background-color: #f7f7f7;
  padding: 14px 16px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #100d40;
}
.input-wrapper input:focus {
  widows: 100%;
  background-color: white;
  border: 1px solid #0f0d2333;
  outline: none;
}
input[type="file"]::file-selector-button {
  background-image: url("../../assets/upload.png");
  background-repeat: no-repeat;
  width: 25px;
  transition: 1s;
  border: none;
}
</style>