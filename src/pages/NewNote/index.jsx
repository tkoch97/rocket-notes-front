import { Container, Form } from './styles.js';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { Section } from '../../components/section';
import { NoteItem } from '../../components/noteItem';
import { Button } from '../../components/button';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export function NewNote() {

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("")
    console.log("passei aqui");
  }

  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <TextArea placeholder="Descrição"/>

          <Section title="Links úteis"/>

          {
            links.map( (link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {}}
              />
            ))
          }
          
          <NoteItem 
            isNew
            placeholder='Novo Link'
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />

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