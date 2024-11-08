import axios from 'axios';

import { AppDispatch } from '../index';
import { setPokemonList, setLoading } from '../slices/pokemonListSlice';

export const fetchPokemonList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

        const pokemonList = await Promise.all(
            response.data.results.map(async (pokemon: { name: string; url: string }) => {
                const details = await axios.get(pokemon.url);

                return {
                    id: details.data.id,
                    name: details.data.name,
                    image: details.data.sprites.front_default,
                    height: details.data.height,
                    types: details.data.types.map((type: any) => type.type.name),
                    stats: {
                        attack: details.data.stats[1].base_stat,
                        defense: details.data.stats[2].base_stat,
                        specialAttack: details.data.stats[3].base_stat,
                        specialDefense: details.data.stats[4].base_stat,
                        speed: details.data.stats[5].base_stat,
                    },
                };
            })
        );

        dispatch(setPokemonList(pokemonList));
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    } finally {
        dispatch(setLoading(false));
    }
};
