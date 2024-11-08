import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoIosArrowBack } from 'react-icons/io';

import { RootState } from '../../store';
import { addToCombatList, removeFromCombatList } from '../../store/slices/combatSlice';
import { Container, Title, Image, Table, TableHeader, TableCell, Button, BackButton } from './styles';

const PokemonDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pokemonId = id ? parseInt(id) : null;

    const pokemon = useSelector((state: RootState) =>
        state.pokemon.list.find((p) => p.id === pokemonId)
    );

    const combatList = useSelector((state: RootState) => state.combat.combatReadyList);

    if (!id || !pokemonId || !pokemon) {
        return <p>Pokémon no encontrado</p>;
    }

    const isInCombatList = combatList.includes(pokemon.id);

    const handleCombatButtonClick = () => {
        if (isInCombatList) {
            dispatch(removeFromCombatList(pokemon.id));
            toast.success(`${pokemon.name} ha sido eliminado del combate`);
        } else {
            if (combatList.length === 6) return toast.error(`La lista de combate está  completa`);
            dispatch(addToCombatList(pokemon.id));
            toast.success(`${pokemon.name} ha sido agregado al combate`);
        }
    };

    return (
        <Container>
            <BackButton onClick={() => navigate('/')}>
                <IoIosArrowBack size={24} />
            </BackButton>

            <Title>{pokemon.name}</Title>
            <Image src={pokemon.image} alt={pokemon.name} />

            <Table>
                <thead>
                    <tr>
                        <TableHeader colSpan={2}>Detalles del Pokémon</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableCell>ID:</TableCell>
                        <TableCell>{pokemon.id}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Altura:</TableCell>
                        <TableCell>{pokemon.height}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Tipo:</TableCell>
                        <TableCell>{pokemon.types?.join(', ')}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Ataque:</TableCell>
                        <TableCell>{pokemon.stats.attack}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Defensa:</TableCell>
                        <TableCell>{pokemon.stats.defense}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Ataque Especial:</TableCell>
                        <TableCell>{pokemon.stats.specialAttack}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Defensa Especial:</TableCell>
                        <TableCell>{pokemon.stats.specialDefense}</TableCell>
                    </tr>
                    <tr>
                        <TableCell>Velocidad:</TableCell>
                        <TableCell>{pokemon.stats.speed}</TableCell>
                    </tr>
                </tbody>
            </Table>

            <Button
                isInCombat={isInCombatList}
                onClick={handleCombatButtonClick} // Usar la función para manejar el botón
            >
                {isInCombatList ? "Eliminar del combate" : "Agregar al combate"}
            </Button>
        </Container>
    );
};

export default PokemonDetail;
