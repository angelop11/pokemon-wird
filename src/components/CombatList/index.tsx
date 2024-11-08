import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState } from '../../store';
import { removeFromCombatList } from '../../store/slices/combatSlice';
import {
    Container,
    Title,
    Grid,
    Card,
    PokemonImage,
    PokemonName,
    RemoveButton
} from './styles';
import { Pokemon } from '../../store/slices/pokemonListSlice';

const CombatList: React.FC = () => {
    const dispatch = useDispatch();
    const combatList = useSelector((state: RootState) => state.combat.combatReadyList);
    const pokemons = useSelector((state: RootState) => state.pokemon.list);

    const selectedPokemons = pokemons.filter((pokemon) =>
        combatList.includes(pokemon.id)
    );

    const handleRemoveCombatList = (pokemon: Pokemon) => {
        dispatch(removeFromCombatList(pokemon.id));
        toast.success(`${pokemon.name} ha sido eliminado del combate`);
    };

    return (
        <Container>
            <Title>{`Listo para el combate ${combatList.length}/6`}</Title>
            {selectedPokemons.length > 0 ? (
                <Grid>
                    {selectedPokemons.map((pokemon) => (
                        <Card key={pokemon.id}>
                            <PokemonImage src={pokemon.image} alt={pokemon.name} />
                            <PokemonName>{pokemon.name}</PokemonName>
                            <RemoveButton onClick={() => handleRemoveCombatList(pokemon)}>
                                🗑
                            </RemoveButton>
                        </Card>
                    ))}
                </Grid>
            ) : (
                <p style={{ textAlign: "center" }}>La lista está vacía</p>
            )}
        </Container>
    );
};

export default CombatList;
