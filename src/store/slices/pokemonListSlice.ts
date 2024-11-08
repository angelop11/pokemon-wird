import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonStats {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    height: number;
    types: string[];
    stats: PokemonStats;
}

interface PokemonState {
    list: Pokemon[];
    isLoading: boolean;
}

const initialState: PokemonState = {
    list: [],
    isLoading: false,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

export const { setPokemonList, setLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;
