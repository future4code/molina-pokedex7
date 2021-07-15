import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.color || 'var(--red-color)'};
  font-size: 1rem;
  padding: 10px 20px;
  width: 160px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`
