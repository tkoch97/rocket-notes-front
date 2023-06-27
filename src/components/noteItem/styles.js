import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({theme, isNew}) => isNew ? "none" : theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  
  border: ${({theme, isNew}) => isNew ? `0.2rem dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1.0rem;
  margin-bottom: 0.8rem;
  padding-right: 1.6rem;

  > button {
    font-size: 2.0rem;
    border: none;
    background: none;
    color: ${({theme, isNew}) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
  }

  > input {
    height: 5.6rem;
    width: 100%;
    font-size: clamp(0.8rem, 0.8rem + 1vw, 1.6rem);
    padding: 1.2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: none;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;