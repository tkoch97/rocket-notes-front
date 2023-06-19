import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 1.0rem;
  
  > input {
    width: 100%;
    height: 5.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: none;
    border: none;
    padding: 1.2rem;
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 1.8rem;
  }
`