<template>
  <div>
    Animals:
    <ul>
      <li v-for="(animal, index) in animals" :key="index">
        {{ animal.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { getAnimals } from "@/api/animals";

export default {
  async setup() {
    const animals = await getAnimals();
    return { animals };
  },
};
</script>
