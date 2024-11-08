import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 16px;
    background-color: lightgray;

`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
`;

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    list-style-type: none;
    padding: 0;
`;

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

export const PokemonImage = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
`;

export const PokemonName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const RemoveButton = styled.button`
    background-color: #e74c3c;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 8px;

    &:hover {
        background-color: #c0392b;
    }
`;
