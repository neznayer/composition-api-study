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
import { ref, computed } from "vue";
export default {
  setup() {
    const capacity = ref(3);
    const participants = ref(["Spongebob", "Mr.Crabbs", "Squidward"]);

    const spacesLeft = computed(
      () => capacity.value - participants.value.length
    );

    function increaseCapacity() {
      capacity.value++;
    }
    return { capacity, participants, spacesLeft, increaseCapacity };
  },
};
</script>
