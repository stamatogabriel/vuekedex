interface NamedAPIResource {
  name: string;
  url: string;
}

interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

interface MoveLearnDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: MoveLearnDetail[];
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface OtherSprite {
  dream_world: Sprite;
  official_artwork: Sprite;
  showdown: Sprite;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSprite;
}

export interface PokemonDetail {
  abilities: Ability[];
  base_experience: number;
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: Ability[];
  past_types: NamedAPIResource[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: any[];
}

export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  location_area_encounters: string;
  stats: { base_stat: number; stat: { name: string } }[];
}