import styled from 'styled-components';

interface ButtonProps {
  isInCombat: boolean;
}

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  position: relative; 
`;

export const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
`;

export const TableHeader = styled.th`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: ${(props) => (props.isInCombat ? '#e74c3c' : '#2ecc71')};
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;
