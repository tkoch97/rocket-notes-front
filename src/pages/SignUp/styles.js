import styled from 'styled-components';
import backgroundImg from '../../assets/img/background_1.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
    margin: 4.8rem 0;
  };
  
  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin: 12.4rem 0 1.0rem 0;
  }
`

export const BackgroundImg = styled.div`
  flex:1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`