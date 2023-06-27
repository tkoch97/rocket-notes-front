import { Container, Form } from './styles.js';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { Section } from '../../components/section';
import { NoteItem } from '../../components/noteItem';
import { Button } from '../../components/button';

export function NewNote() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título"/>
          <TextArea placeholder="Descrição"/>

          <Section title="Links úteis"/>
          <NoteItem value='https://chat.openai.com/'/>
          <NoteItem placeholder='Novo Link' isNew/>

          <Section title="Marcadores"/>
          <div className='tags'>
            <NoteItem value='react'/>
            <NoteItem value='node.js'/>
            <NoteItem placeholder='Nova tag' isNew/>
          </div>

          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  );
}