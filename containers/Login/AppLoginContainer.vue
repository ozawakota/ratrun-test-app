<template>
  <AppLogin
    @form-submitted="handleFormSubmitted"
    @update-input="handleUpdateInput($event)"
  />
</template>

<script lang="ts" setup>
import { InputDataType } from "@/types/user";
import { provide, reactive } from "vue";
import { AppLogin } from "@/components/organisms/Login";
import { postLogin } from '@/api/user';

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
  try{
    const res = await postLogin(Req);
    alert(`こんにちは。${Req.email}さん。top画面へ遷移します。`)
    router.push("/");
  }catch{
    alert(`ログインに失敗しました`)
  }

};
</script>