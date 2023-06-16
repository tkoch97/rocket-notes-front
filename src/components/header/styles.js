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
  
  @media (max-width:450px) {
    padding: 0 3.0rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.0rem;

  > img {
    width: 6.0rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border:none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
`;