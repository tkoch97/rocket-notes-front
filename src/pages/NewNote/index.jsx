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
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }
  
  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }
  
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
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
                onClick={() => {handleRemoveLink(link)}}
              />
            ))
          }
          
          <NoteItem 
            isNew
            placeholder='Novo Link'
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={() => {
              if(newLink.trim() !== '') {
                handleAddLink()
              } else {
                alert("É necessário que o campo esteja preenchido para adicionar um novo link.")
              }
            }}
            />

          <Section title="Marcadores"/>
          <div className='tags'>
            
            {
              tags.map( (tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {handleRemoveTag(tag)}}
                />
              ))
            }

            <NoteItem 
              isNew 
              placeholder='Nova tag'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={() => {
                if(newTag.trim() !== '') {
                  handleAddTag()
                } else {
                  alert("É necessário que o campo esteja preenchido para adicionar uma nova tag")
                }
              }}
            />
          </div>

          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  );
}