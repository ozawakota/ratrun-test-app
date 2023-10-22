<template>
  <form class="signup_form">
    <fieldset class="c-fieldset" v-for="(data, key) in inputData" :key="key">
      <legend>{{ data.label }}</legend>
      <div class="form_input">
        <BasicInput
          :type="data.type"
          :placeholder="data.placeholder"
          :value="data.value"
          @updateInput="
          updateInput($event.target.value, key)
          "
          @blur="checkValidate($event.target.value, key)"
          :required="data.required"
        />
        <button
          type="button"
          id="icon_eye"
          v-if="data.isVisibleIcon" 
          @click="toggleInputType(key)">
          <font-awesome-icon
          :icon="data.type !== 'password' ? ['fas', 'eye'] : ['fas', 'eye-slash']" 
          />

        </button>
      </div>
      <div v-if="!data.isValid" class="error">{{ data.error }}</div>
    </fieldset>

    <div class="form-btn signup_form-btn">
      <BasicButton
        :text="props.btnText"
        color="#fff"
        backGround="#F86986"
        @clickButton="$emit('formSubmitted')"
        :isButtonDisabled= isButtonDisabled()
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { inject, defineEmits, defineProps } from "vue";
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";


const inputData = inject("formDataKey", null);
const emit = defineEmits(["updateInput", "formSubmitted"]);
const props = defineProps({
  btnText: {
    type: String,
    default: "ボタンテキスト",
  },

});
const updateInput = (value, key) => {
  emit("updateInput", { value:value, key:key });
}

// バリデーションチェック
// 引数
// 1. 入力された値
// 2. 入力されたinputがどちらなのかを示すkey
// 返り値
// => boolean
const checkValidate = (value: string, key: number) => {
  const isValid = inputData[key].validate(value);

  if (!isValid) {
    inputData[key].isValid = false;
    inputData[key].error = `${
      inputData[key].label
    }を正しく入力してください。${inputData[key].required ? "必須項目です。" : ""}`;
  } else {
    inputData[key].isValid = true;
    inputData[key].error = "";
  }

}

// アイコンクリックでinputタイプを変更
const toggleInputType = (key: number) => {
  inputData[key].type = inputData[key].type === "password" ? "text" : "password";
}

// ボタンをアクティブにする
const isButtonDisabled = () => {

  return !(inputData[0].validate(inputData[0].value) && inputData[1].validate(inputData[1].value));
}
</script>



<style lang='scss' scoped>
.signup,.login {
  &_form {
    margin-block-start: 30px;
    &-btn {
      text-align: center;
    }
  }
  .form_input{
    input{
      padding-inline-end: 40px;
    }
    position: relative;
    #icon_eye{
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .error{
    color: #e92149;
    margin-block-start: 10px;
    font-size: 15px;
  }
  
}
</style>