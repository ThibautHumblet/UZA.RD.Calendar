<script setup lang='ts'>
import { useUserStore } from '@/stores';

const userStore = useUserStore()

</script>
<template>
    <div class="mx-auto d-flex flex-grow-1">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img src='../../assets/uzaLogo.png'
                class='align-self-center rounded d-block my-5 mw-60 h-auto logo user-select-none' alt='uzaLogo' />
            <p class="text-center">U bent succesvol afgemeld. Klik hier om u opnieuw aan te melden.</p>
            <button class="my-3 btn btn-primary" @click="userStore.doLogin()">
                <span>Opnieuw inloggen</span>
            </button>
        </div>
    </div>
</template>  