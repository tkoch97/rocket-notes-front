import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 2.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 1.0rem;
  margin-bottom: 1.6rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin-bottom: 3.0rem;
  }

  > footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
`