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
import useEventSpace from "@/use/event-space";
export default {
  setup() {
    const { capacity, participants, spacesLeft, increaseCapacity } =
      useEventSpace();
    return {
      capacity,
      participants,
      spacesLeft,
      increaseCapacity,
    };
  },
};
</script>
