<template>
  <NuxtLink :to="`/${pokemon.name}`">
    <v-card class="pokemon-card">
      <v-card-title
        class="pokemon-title"
        :style="`background: ${(typesColors as any)[pokemon.types[0]]}; color: #fefefe; font-weight: bold; text-transform: capitalize;`"
        >{{ pokemon.name }}</v-card-title
      >
      <v-card-text class="pokemon-text">
        <div class="pokemon-image-container">
          <img
            class="pokemon-image"
            :src="`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`"
            :alt="pokemon.name"
          />
        </div>
        <div class="pokemon-types">
          <v-chip
            class="pokemon-type"
            v-for="item in pokemon.types"
            :style="`background: ${(typesColors as any)[item]}; color: #fefefe; font-weight: bold; text-transform: capitalize;`"
          >
            {{ item }}
          </v-chip>
        </div>
        <div
          class="pokemon-id"
          :style="`color: ${(typesColors as any)[pokemon.types[0]]};`"
        >
          {{ String(pokemon.id).padStart(3, "0") }}
        </div>
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/types/pokemon";
import typesColors from "../constants/typesColors.json";

defineProps<{
  pokemon: Pokemon;
}>();
</script>
<style scoped>

.pokemon-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  margin: 0.5rem;
  height: 270px;
}

.pokemon-id {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1rem 1rem -1rem;
  padding: 0.5rem 1rem -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  font-size: 120px;
  z-index: -1;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-title {
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.pokemon-text {
  padding: 15px;
}

.pokemon-types {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
}

.pokemon-type {
  margin: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}

.pokemon-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
}

.pokemon-image {
  height: 95%;
  object-fit: cover;
}
</style>