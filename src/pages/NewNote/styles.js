import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display:grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;

`;

export const Form = styled.form`
 max-width: 55.0rem;
 margin: 3.8rem auto;
 padding: 1.0rem;

 > header {
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.6rem;

  a {
    font-size:2.0rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
 }
`