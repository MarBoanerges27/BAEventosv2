import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
  state: () => {
    return { isLogin: false, userState:{} };
  },
  actions: {
    logout() {
      this.isLogin = false;
    },
    login(user) {
      this.isLogin = true;
      this.userState = user;
    },
  },
});
