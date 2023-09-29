import { defineStore } from "pinia";
import { computed } from "vue";
import { useDateStore } from "./dateStore";
import router from "@/router";

import { MsalProvider, isAuth, tkn } from "@/providers/msalProvider";

export const useUserStore = defineStore('userStore', {
    state: () => {
        const token = tkn;
        const isAuthenticated = isAuth;
        const login = computed(() => token.value?.account.name)

        async function doLogin() {
            try {
                await MsalProvider.loginRedirect();
            } catch (error) {
                console.error(error);
            }
        }

        function doLogout() {
            MsalProvider.logout();
            useDateStore().$reset()
            router.replace('/logout')
        }

        return { doLogin, doLogout, token, isAuthenticated, login }
    },
    persist: {
        storage: localStorage
    }
})
