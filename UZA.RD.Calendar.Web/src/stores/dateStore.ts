import { defineStore, storeToRefs } from "pinia";
import { useUserStore } from "./userStore";
import { ref } from "vue";

export const useDateStore = defineStore('dateStore', {
    state: () => {
        const userStore = useUserStore()
        const { token } = storeToRefs(userStore)
        const date = ref<string>()

        async function getDate() {
            try {
                const response = await fetch(import.meta.env.VITE_API_BASE_URL + `date/`, { headers: { 'Authorization': `Bearer ${token.value?.accessToken}` } });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const dateString = await response.text();
                date.value = dateString;
            } catch (err) {
                console.error(err);
                console.error("API connection error");
            }
        }

        function $reset() {
            date.value = ''
        }

        return { getDate, date, $reset }
    },
    persist: {
        storage: localStorage
    }
});