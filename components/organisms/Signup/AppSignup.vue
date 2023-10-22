<template>
  <section class="page signup">
    <div class="c-inner">
      <div class="signup_inner">
        <h2 class="p-title">新規会員登録</h2>
        <BasicForm
          @form-submitted="$emit('formSubmitted', $event)"
          @update-input="$emit('updateInput', $event)"
          btnText = "同意して新規登録する(無料)"
        />
      </div>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
import { defineEmits } from "vue";
import { BasicForm } from "../../molecules/BasicForm";

const emit = defineEmits(["updateInput", "formSubmitted"]);
</script>

<style lang="scss" scoped>
.signup {
  &_inner {
    margin-block-start: 30px;
    max-width: 740px;
    margin-inline: auto;
  }
}
</style>