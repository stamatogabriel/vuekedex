<template>
  <div style="margin-top: 1.5rem">
    <div class="search-wrapper">
      <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        clearable
        density="compact"
        label="Buscar pokemon"
        variant="solo"
        hide-details
        single-line
        v-model="searchTerm"
        @keydown.enter="searchPokemon"
      />
      <button @click="searchPokemon">Buscar</button>
    </div>

    <p v-if="loading" class="text-center">Loading...</p>

    <p v-if="!pokemons.length" class="text-center">Nenhum Pokémon encontrado</p>

    <div v-if="viewedPokemons.length">
      <v-container class="pokemon-container">
        <h2>Pokemons vistos</h2>
        <v-row no-gutters dense>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(pokemon, index) in viewedPokemons"
            :key="index"
          >
            <Card :pokemon="pokemon" />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container class="pokemon-container">
        <h2>Pokemons</h2>
        <v-row no-gutters dense>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(pokemon, index) in pokemons"
            :key="index"
          >
            <Card :pokemon="pokemon" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue";
const router = useRouter();

const loading = ref(true);
const searchTerm = ref("");

const { fetchPokemons, pokemons, viewedPokemons } = usePokemons();

await fetchPokemons();
loading.value = false;

const searchPokemon = async () => {
  await router.push(`/${searchTerm.value}`);
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.pokemon-container {
  background-color: #fafafa;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.search-wrapper button {
  margin-left: 1rem;
  background-color: #D41F1F;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
</style>
