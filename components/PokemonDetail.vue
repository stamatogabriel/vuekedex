<template>
  <NuxtLink
    class="back-link"
    to="/"
    :style="`background: ${(typesColors as any)[(pokemon.types[0] as any).type.name]}; color: #fefefe; font-weight: bold;`"
  >
    <v-icon icon="mdi-arrow-left" start />
  </NuxtLink>
  <div class="pokemon-detail">
    <v-card class="pokemon-info">
      <div
        class="pokemon-header"
        :style="`background: ${(typesColors as any)[(pokemon.types[0] as any).type.name]}; color: #fefefe; font-weight: bold;`"
      >
        <span>#{{ String(pokemon.id).padStart(3, "0") }}</span>
        <h1 class="pokemon-name">{{ pokemon.name }}</h1>
      </div>

      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img
            class="pokemon-image"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
            :alt="pokemon.name"
          />
        </v-col>

        <v-col cols="12" md="6" class="pokemon-wrapper-stats">
          <v-row>
            <v-col cols="12" md="6">
              <div class="pokemon-stats">
                <div class="stat">
                  <h2>Height</h2>
                  <p>{{ pokemon.height }}</p>
                </div>
                <div class="stat">
                  <h2>Weight</h2>
                  <p>{{ pokemon.weight }}</p>
                </div>
                <div class="stat">
                  <h2>Abilities</h2>
                  <p v-for="ability in pokemon.abilities">
                    {{ ability.ability.name.replace(/-/g, " ") }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="pokemon-stats">
                <div class="stat">
                  <h2>Stats</h2>
                  <div v-for="stat in pokemon.stats">
                    <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
                  </div>
                </div>
                <div class="pokemon-types">
                  <h2>Types</h2>
                  <div>
                    <v-chip
                      class="badge"
                      v-for="item in pokemon.types"
                      :style="`background: ${(typesColors as any)[(item as any).type.name]}; color: #fefefe; font-weight: bold;`"
                    >
                      {{ (item as any).type.name }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import typesColors from "../constants/typesColors.json";

defineProps<{
  pokemon: any;
}>();
</script>

<style scoped>
.pokemon-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 56.25rem;
  margin: 0 auto;
  gap: 2rem;

  @media only screen and (min-width: 600px) {
    padding: 2rem;
  }
}

.pokemon-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

@media only screen and (min-width: 1000px) {
  .pokemon-info {
    max-height: 500px;
  }
}

.pokemon-wrapper-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.pokemon-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  background: #f5f5f5;
  width: calc(100% + 2 * 1rem);
  margin-top: -1rem;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.pokemon-header span {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.pokemon-header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  .pokemon-header h1 {
    font-size: 2rem;
  }
}

.pokemon-image {
  height: 100%;
  max-height: 280px;
  object-fit: cover;
}

.pokemon-name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

@media only screen and (max-width: 600px) {
  .pokemon-name {
    font-size: 2rem;
  }
}

.pokemon-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.stat {
  width: 12.5rem;
}

.stat p {
  text-transform: capitalize;
}

@media only screen and (max-width: 600px) {
  .stat {
    width: 100%;
  }
}

.pokemon-types {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
}

.pokemon-locations {
  margin-top: 2rem;
}

.pokemon-locations ul {
  list-style: none;
  padding: 0;
  text-transform: capitalize;
}

.back-link {
  margin: 1rem 0 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-link i {
  margin: auto;
}
</style>
