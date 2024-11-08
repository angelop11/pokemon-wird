import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CombatState {
  combatReadyList: number[];
}

const initialState: CombatState = {
  combatReadyList: [],
};

const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    addToCombatList(state, action: PayloadAction<number>) {
      if (state.combatReadyList.length < 6 && !state.combatReadyList.includes(action.payload)) {
        state.combatReadyList.push(action.payload);
      }
    },
    removeFromCombatList(state, action: PayloadAction<number>) {
      state.combatReadyList = state.combatReadyList.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addToCombatList, removeFromCombatList } = combatSlice.actions;
export default combatSlice.reducer;
