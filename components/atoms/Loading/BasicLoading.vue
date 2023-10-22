<template>
  <div class="loading-overlay">
    <div class="overlay"></div>
    <img src="@/assets/img/loading.gif" class="loading-image" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-image {
  width: 64px;
}
</style>
