<script setup lang='ts'>
import { useUserStore } from '@/stores';

const userStore = useUserStore()

userStore.doLogin();
</script>

<template></template>