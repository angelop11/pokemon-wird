import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RootState, AppDispatch } from '../../store';
import { fetchPokemonList } from '../../store/thunks/fetchPokemonList';
import { addToCombatList } from '../../store/slices/combatSlice';
import {
    Container,
    Title,
    SearchInput,
    Grid,
    Card,
    PokemonImage,
    PokemonName,
    AddButton
} from './styles';
import { Pokemon } from '../../store/slices/pokemonListSlice';


const PokemonList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { list, isLoading } = useSelector((state: RootState) => state.pokemon);
    const [search, setSearch] = useState('');
    const combatList = useSelector((state: RootState) => state.combat.combatReadyList);


    useEffect(() => {
        if (!list.length) {
            dispatch(fetchPokemonList());
        }
    }, [dispatch]);

    const handleCardClick = (id: number) => {
        navigate(`/pokemon/${id}`);
    };

    const filteredList = list.filter(
        (pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
            pokemon.id.toString().includes(search)
    );

    const handleAddToCombat = (pokemon: Pokemon) => {
        if (combatList.length === 6) return toast.error(`La lista de combate está  completa`);
        toast.success(`${pokemon.name} ha sido agregado al combate`);
        dispatch(addToCombatList(pokemon.id))
    }

    if (isLoading) return <p>Loading...</p>;

    return (
        <Container>
            <Title>Lista de Pokémones</Title>
            <SearchInput
                type="text"
                placeholder="Busca tu pokémon por nombre o número"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Grid>
                {filteredList.map((pokemon) => (
                    <Card key={pokemon.id} onClick={() => handleCardClick(pokemon.id)}>
                        <PokemonImage src={pokemon.image} alt={pokemon.name} />
                        <PokemonName>{pokemon.name}</PokemonName>
                        {!combatList.includes(pokemon.id) &&
                            <AddButton onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCombat(pokemon)
                            }}>
                                +
                            </AddButton>
                        }
                    </Card>
                ))}
            </Grid>
        </Container>
    );
};

export default PokemonList;
