import { Container, Links, Content, NoteDescription } from './styles.js';
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';
import { ButtonText } from '../../components/buttonText';
import { NoteDetails } from '../../components/noteDetails';
import { api } from '../../services/api';

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  async function handleDeleteNote() {
    const confirm = window.confirm("Deseja realmente excluir essa nota, você tem certeza absoluta disso??");

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={handleDeleteNote}
            />
              
            <NoteDetails title={data.title}>
              <NoteDescription>
                {data.description}
              </NoteDescription>
            </NoteDetails>

            {
              data.links &&
              <Section title="Links Úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={tag.id}
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button 
              title='Voltar'
              onClick={handleBack}
            />
          </Content>
        </main>
      }

    </Container>
  );

}
