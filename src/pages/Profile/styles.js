import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:100vh;

  > header {
     width: 100%;
     height: 14.0rem;
     background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items:center;
    padding: 0 12.4rem;

    svg{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 3.0rem;
    }

    @media (max-width:450px) {
      padding: 0 4.0rem;
    }
  }
`

export const Form = styled.form`
  max-width: 35.0rem;
  margin: -11.0rem auto 3.0rem;
  padding: 2.5rem;

  > div:nth-child(4){
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: clamp(15.0rem, 15.0rem + 1vw, 18.2rem);
  height: clamp(15.0rem, 15.0rem + 1vw, 18.2rem);
  
  > img {
    width: clamp(15.0rem, 15.0rem + 1vw, 18.2rem);
    height: clamp(15.0rem, 15.0rem + 1vw, 18.2rem);
    border-radius: 50%;
  }
  
  > label {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;

    position: absolute;
    bottom: 0.2rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2.2rem;
    }
  }
`