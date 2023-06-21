import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display:flex;
  align-items: stretch;
  text-align: center;
`
export const Form = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 13.6rem;
  
  @media(max-width:768px) {
    padding: 0 2.0rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 4.8rem;
  };
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  > h2 {
    font-size: 2.4rem;
    margin: 8.4rem 0 4.8rem 0;
  };
  
  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 12.4rem;
  }
`