<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Number of animals: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { getAnimalCount } from "@/api/animals";

export default {
  setup() {
    const searchInput = ref("");
    const results = ref(0);

    getAnimalCount(searchInput.value).then((resp) => {
      results.value = resp;
    });

    return { searchInput, results };
  },
};
</script>
