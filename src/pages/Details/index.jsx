import { Container, Links } from './styles.js';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';

export function Details() {

  return(
    <Container>
      <Header />

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </Links>
      </Section>

      <Section title="Minhas Tags">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title='Voltar'></Button>
    </Container>
  );

}
