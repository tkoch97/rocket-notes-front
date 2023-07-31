import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display:grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: grid;
    grid-template-columns:31% 32% 31%;
    gap: 0.8rem;
  }

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

  button {
    font-size:2.0rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
 }
` 