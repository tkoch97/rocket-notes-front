import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: clamp(15.0rem, 15.0rem + 5vw, 25.0rem) auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "createNote content";

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > h1{
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: clamp(1.6rem, 1.6rem + 1vw, 2.4rem);
    font-weight: 700;
    padding: 0 0.5rem;
  }
  
  `;

export const Menu = styled.ul`
  grid-area: menu;
  text-align: center;
  padding-top: 6.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > li {
    margin-bottom: 2.4rem;
  }
  `;

export const Search = styled.div`
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${({ theme }) => theme.PADDING.SEARCH_AND_CONTENT_HOMEPAGE};
  padding-right: ${({ theme }) => theme.PADDING.SEARCH_AND_CONTENT_HOMEPAGE};
  `;

export const Content = styled.div`
  grid-area: content;
  padding-left: ${({ theme }) => theme.PADDING.SEARCH_AND_CONTENT_HOMEPAGE};
  padding-right: ${({ theme }) => theme.PADDING.SEARCH_AND_CONTENT_HOMEPAGE};
  overflow-y: auto;
`;

export const CreateNote = styled.button`
  grid-area: createNote;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  `;
