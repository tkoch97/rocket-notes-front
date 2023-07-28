import { Container, Brand, Menu, Search, Content, CreateNote } from './styles';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';
import { api } from '../../services/api';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';


export function Home() {

  const [tags, setTags] = useState();
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagsSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else{
      setTagsSelected(prevState => [...prevState, tagName])
    }
    
  }

  function handleSelectedAll(){
    setTagsSelected([])
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data)
    }

    fetchTags();
  }, [])
  
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>

        <li>
          <ButtonText 
            title="Todas"
            onClick={handleSelectedAll}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))

        }

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">

          <Note data = {{
            title: 'React', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'SPA'},
              {id: '3', name: 'JSX'},
            ]
          }}/>
          
        </Section>
      </Content>

      <CreateNote to="/new-note">
        <FiPlus />
        Criar Nota
      </CreateNote>

    </Container>
  )
}