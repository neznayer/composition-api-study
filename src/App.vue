<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Number of animals: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { getAnimalCount } from "@/api/animals";

export default {
  setup() {
    const searchInput = ref("");
    const results = ref(0);

    watch(searchInput, async () => {
      const result = await getAnimalCount(searchInput.value);
      results.value = result;
    });

    return { searchInput, results };
  },
};
</script>
