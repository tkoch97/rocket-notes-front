import { Container, Links, Content, NoteDescription } from './styles.js';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';
import { ButtonText } from '../../components/buttonText';
import { NoteDetails } from '../../components/noteDetails';

export function Details() {

  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
            
          <NoteDetails title="Introdução ao React">
            <NoteDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </NoteDescription>
          </NoteDetails>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://carreiras.itau.com.br/tecnologia/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title='Voltar'></Button>
        </Content>
      </main>
    </Container>
  );

}
