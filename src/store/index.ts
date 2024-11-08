import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonListSlice';
import combatReducer from './slices/combatSlice';

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        combat: combatReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
