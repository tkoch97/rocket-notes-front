import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  padding: 0 1.6rem;
  border-radius: 1.0rem;
  margin-top: 1.6rem;
  font-weight: 500;

  &:disabled {
    opacity:0.5;
    cursor: progress;
  }
`;