import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; //Estamos nomeando o componente como header para quando formos distribuir no layout.
  width: 100%;
  height: 10.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8.0rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;