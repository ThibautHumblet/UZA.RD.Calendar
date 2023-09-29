<script setup lang='ts'>
import { useDateStore } from '@/stores';
const dateStore = useDateStore()
dateStore.getDate()
</script>
<template>
    <h1>Datum en Tijd</h1>
    <p>Het is nu {{ dateStore.date }}.</p>
</template>