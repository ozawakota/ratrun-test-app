<template>
  <main class="main">
    <section class="page login">
      <div class="c-inner">
        <div class="login_inner">
          <h2 class="p-title">ログイン画面</h2>
          <BasicForm
            @form-submitted="$emit('formSubmitted', $event)"
            @update-input="$emit('updateInput', $event)"
            btnText = "ログインする"
          />
        </div>
      </div>
    </section>
  </main>
</template>
  
<script lang="ts" setup>
import { defineEmits } from "vue";
import { BasicForm } from "../../molecules/BasicForm";

const emit = defineEmits(["updateInput", "formSubmitted"]);
</script>

<style lang="scss" scoped>
.login {
  &_inner {
    margin-block-start: 30px;
    max-width: 740px;
    margin-inline: auto;
  }
}
</style>