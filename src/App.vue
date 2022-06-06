<template>
  <div v-if="error">Uh oh .. {{ error }}</div>
  <Suspense v-else>
    <template #default>
      <Animals />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>
<script>
import Animals from "@/components/Animals.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  components: {
    Animals,
  },
  setup() {
    const error = ref(null);

    onErrorCaptured(error, (err) => {
      error.value = err;
      return false;
    });

    return {
      error,
    };
  },
};
</script>
