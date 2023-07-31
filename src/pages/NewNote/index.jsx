import { Container, Form } from './styles.js';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { Section } from '../../components/section';
import { NoteItem } from '../../components/noteItem';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';
import { api } from '../../services/api.js';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

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

  async function handleAddNewNote() {

    if(!title) {
      return alert("Por favor, dê um título a sua nota")
    }

    if(newLink){
      return alert(`Você preencheu o campo de novo link, mas não o adicionou.
Por favor, clique no botão '+' para adicionar ou deixe o campo vazio.`)
    }
    
    if(newTag){
      return alert(`Você preencheu o campo de nova Tag, mas não a adicionou.
Por favor, clique no botão '+' para adicionar ou deixe o campo vazio.`)
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText 
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />

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

          <Button 
            title='Salvar'
            onClick={handleAddNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}