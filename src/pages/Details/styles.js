import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll; //transborde de margem do eixo Y formando um scroll
    padding: 6.4rem 2.0rem;
  }
`;

export const Links = styled.ul`
  list-style: none;
  
  > li {
    margin-top: 1.2rem;
    
    a {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 550px;

  > button:first-child {
    align-self: end;
    margin-bottom: 6.4rem;
  }

  > button:last-child {
    margin-top: 13.0rem;
  }
`;

export const NoteDescription = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-bottom: 5.4rem;
  text-align: justify;
  font-family: 'Roboto';
`;
