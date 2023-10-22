export default defineNuxtPlugin(() => {
  return {

    provide: {
      changeKey: (key: string): string => {
        return key;
      },
    }
  }
})