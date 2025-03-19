<script setup lang="ts">
import { VCalendar } from 'vuetify/labs/VCalendar';
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

const dataEscolhida = ref<Date>(new Date());
</script>

<template>
  <HeaderComponent />
  <main>
    <v-container>
      <VCalendar locale="pt-BR" :masks="{ title: 'MMM YYYY' }" hide-week-number>
        <VCalendarDay></VCalendarDay>
      </VCalendar>


    </v-container>
  </main>
</template>
