import router from '@/router';
import { PublicClientApplication, type AuthenticationResult } from '@azure/msal-browser';
import { ref } from 'vue';

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    authority: import.meta.env.VITE_AUTH_AUTHORITY,
    redirectUri: "http://localhost:5173/date",
    postLogoutRedirectUri: "http://localhost:5173/logout",
  },
  cache: {
    cacheLocation: "localStorage",
  }
};

const loginRequest = {
  scopes: [`${import.meta.env.VITE_AUTH_SCOPE}`]
};

const msalInstance = new PublicClientApplication(msalConfig);

await msalInstance.initialize();

export const tkn = ref<AuthenticationResult | null>()
export const isAuth = ref<boolean>()

msalInstance
  .handleRedirectPromise()
  .then((tokenresponse) => {
    if (msalInstance.getAllAccounts()[0] != undefined){
      msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);

      isAuth.value = true;
      tkn.value = tokenresponse;

      router.replace('/date')
    }
  })

export const MsalProvider = {
  instance: msalInstance,

  async loginPopup() {
    await msalInstance.loginPopup(loginRequest);
    console.log(msalInstance.getAllAccounts()[0])
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    return msalInstance.getActiveAccount();
  },

  async loginRedirect() {
    await msalInstance.loginRedirect(loginRequest);
  },

  logout() {
    router.replace('/logout')
    msalInstance.logoutPopup();
    tkn.value = null;
    isAuth.value = false;
  },
};