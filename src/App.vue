<template>
  <Suspense>
    <template #default>
      <Animals />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>
<script>
import Animals from "@/components/Animals.vue";

export default {
  components: {
    Animals,
  },
};
</script>
