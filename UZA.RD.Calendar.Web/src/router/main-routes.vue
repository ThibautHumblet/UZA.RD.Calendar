
<script lang="ts" setup>
import { MainHeader } from '@/components';


</script>
<template>
    <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column bg-off-white">
        <MainHeader />
        <div class="flex-grow-1">
            <router-view />
        </div>
    </div>
</template>