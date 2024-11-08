import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

export const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
`;

export const PokemonName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const AddButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #45a049;
    }
`;
