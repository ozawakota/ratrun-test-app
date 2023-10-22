<template>
  <AppSignup
    @form-submitted="handleFormSubmitted"
    @update-input="handleUpdateInput($event)"
  />
</template>

<script lang="ts" setup>
import { InputDataType } from "@/types/user";
import { provide, reactive } from "vue";
import { AppSignup } from "@/components/organisms/Signup";
import { postRegistration } from "@/api/user";

const router = useRouter();

const { $email, $password, $changeKey } = useNuxtApp();

const inputData: InputDataType[] = reactive([
  {
    label: "メールアドレス",
    type: "email",
    placeholder: "taro.tanaka@example.com",
    value: "",
    required: true,
    isValid: true,
    error: "",
    validate(value) {
      // バリデーションルールを定義(plugins)
      return $email(value,this.required);
    },
    isVisibleIcon: false
  },
  {
    label: "パスワード",
    type: "password",
    placeholder: "パスワード(半角英数8~16文字)",
    value: "",
    required: true,
    isValid: true,
    error: "",
    validate(value) {
      // バリデーションルールを定義(plugins)
      return $password(value,this.required);
    },
    isVisibleIcon: true
  },
]);

provide("formDataKey", inputData);

const handleUpdateInput = (event: {
  key: number;
  value: InputDataType["value"];
}) => {
  inputData[event.key].value = event.value;
};

const handleFormSubmitted = async () => {

  const Req = inputData.reduce(
    (acc, { type, value }) => ({ ...acc, [type === "text" ? "password" : type]: value }),
    {}
  );

  // ここでAPIを叩いたり、状態を管理する(emit)
  try {
    const res = await postRegistration(Req);
    alert("新規登録に成功しました。画面を遷移します。");
    router.push("/users/login");
  } catch (error) {
    //
    alert("新規登録に失敗しました。");
  }

};
</script>