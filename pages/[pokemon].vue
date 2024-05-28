<template v-if="data">
  <PokemonDetail :pokemon="data" />
</template>

<script setup lang="ts">
import PokemonDetail from '~/components/PokemonDetail.vue';
const { pokemon } = useRoute().params;
const { viewPokemon } = usePokemons();

const { data, error } = await useApi(`/pokemon/${pokemon}`, {
  pick: [
    "id",
    "name",
    "height",
    "weight",
    "types",
    "abilities",
    "location_area_encounters",
    "stats",
  ],
  default: () => ({
    id: 0,
    name: "",
    height: "",
    weight: "",
    types: [],
    abilities: [{ ability: { name: "" } }],
    location_area_encounters: "",
    stats: [{ base_stat: 0, stat: { name: "" } }],
  }),
});

if (error) {
  console.error(error);
}

onMounted(() => {
  if (data)
    viewPokemon({
      id: data.value.id,
      image: "",
      name: data.value.name,
      types: data.value.types.map((type: { type: { name: string } }) => type.type.name),
    });
});
</script>

