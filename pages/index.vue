<template>
  <div class="top-page">
    <BasicLoading v-show="isLoading" />
    <p>トップページ</p>
    <ul>
      <li>
        <a href="">testtest</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { BasicLoading } from "@/components/atoms/Loading/";
import { ref } from "vue";
import type { Ref } from 'vue';
import {
  getMatters,
} from "@/api/matters";
import { Matters } from "@/types/matter";


const isLoading = ref(false);
const matters: Ref<Matters[]> = ref([]);

(async () => {

  try {
    isLoading.value = true;
    matters.value = await getMatters();
  } catch {
    alert("error");
  } finally {
    isLoading.value = false
  }
})();

</script>
<style lang="scss" scoped>
.top {
  &-page {
    color: red;
    @include mobile {
      color: blue;
    }
    @include tablet {
      color: green;
    }
  }
}
</style>
