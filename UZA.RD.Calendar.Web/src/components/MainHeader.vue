<script lang="ts" setup>
import { ExitIcon } from '@/components';
import { useUserStore } from '@/stores';

const userStore = useUserStore()
</script>

<template>
    <div
        class='shadow-sm d-flex flex-column flex-shrink-0 flex-grow-0 px-2 bg-white border-top border-primary border-5 min-h-110px'>
        <div class="d-flex flex-row justify-content-between">
            <span class='fw-bold'>UZA.RD.Calendar</span>
            <span>
                {{ userStore.login }}
                <ExitIcon style="cursor: pointer; width: 25px; height: 25px;" @click="userStore.doLogout" />
            </span>
        </div>
        <div class="row g-0">
            <div class="col-lg-6 d-flex">
            </div>
            </div>
        </div>
</template>