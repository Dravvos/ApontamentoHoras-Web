<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { VCalendar, VCalendarInterval, VCalendarIntervalEvent } from 'vuetify/labs/VCalendar';
import { useDate } from 'vuetify';

const dataEscolhida = ref<Date>(new Date());
const eventos = ref<any>([]);

function rnd(a: number, b: number) {
  return Math.floor((b - a + 1) * Math.random()) + a
}

onMounted(async () => {
  const adapter = useDate();
  const min: any = adapter.startOfDay(adapter.startOfMonth(new Date()));
  const max: any = adapter.endOfDay(adapter.endOfMonth(new Date()));

  const days = (max.getTime() - min.getTime()) / 86400000;

  const eventCount = Math.ceil(days);
  console.log(eventCount)

  for (let i = 0; i < eventCount; i++) {
    const currentDate = new Date(min.setDate(i + 1));
    if (currentDate.getDay() == 0 || currentDate.getDay() == 6)
      continue;

    const firstTimestamp = new Date(new Date(min.setDate(i + 1)).setHours(7)).getTime();

    const first = new Date(firstTimestamp - (firstTimestamp % 900))
    const secondTimestamp = rnd(2, 8) * 900
    const second = new Date(first.getTime() + secondTimestamp)

    eventos.value.push({
      title: '00:00',
      start: first,
      end: second,
      color: 'orange',
      allDay: false,
    })
  }
})

function handleDayClick(event: any) {
  console.log(event);
}

</script>

<template>
  <HeaderComponent />
  <main>
    <v-container>
      <VCalendar @click="handleDayClick" hide-week-number :interval-height="25" :events="eventos" view-mode="month"
        title="Apontamentos">
        <VCalendarDay></VCalendarDay>
      </VCalendar>

    </v-container>
  </main>
</template>
