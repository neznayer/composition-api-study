import { ref, computed } from "vue";

export default function useEventSpace(eventSpace) {
  const capacity = ref(3);
  const participants = ref(["Spongebob", "Mr.Crabbs", "Squidward"]);

  const spacesLeft = computed(() => capacity.value - participants.value.length);

  function increaseCapacity() {
    capacity.value++;
  }
  return { capacity, participants, spacesLeft, increaseCapacity };
}
