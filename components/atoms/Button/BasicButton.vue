<template>
  <button
    type="button"
    @click="$emit('clickButton', $event)"
    :class="['c-btn']"
    :disabled="isButtonDisabled"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "クリック",
  },
  color: {
    type: String,
    default: "",
  },
  backGround: {
    type: String,
    default: "",
  },
  isButtonDisabled: {
    type: Boolean,
    default: true,
  },

});
</script>
  

<style lang="scss" scoped>
.c-btn {
  background-color: v-bind(backGround);
  border-color: v-bind(backGround);
  color: v-bind(color);
  &:disabled{
    border-color:#ccc;
    background-color:#ccc;
    pointer-events:none;
  }
}
</style>