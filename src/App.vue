<template>
  <div>Capacity: {{ capacity }}</div>
  <p>Participants:</p>
  <ul>
    <li v-for="(participant, index) in participants" :key="index">
      {{ participant }}
    </li>
  </ul>
  <p>Spaces left: {{ spacesLeft }}</p>
  <button @click="increaseCapacity()">Increase capacity</button>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const event = reactive({
      capacity: 3,
      participants: ["Spongebob", "Mr. Crabbs", "Squidward"],
      spacesLeft: computed(() => event.capacity - event.participants.length),
    });

    function increaseCapacity() {
      event.capacity++;
    }
    return { increaseCapacity, ...toRefs(event) };
  },
};
</script>
