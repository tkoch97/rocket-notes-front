import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

export function Profile() {
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        
        <Avatar>

          <img src='https://github.com/tkoch97.png' alt="Foto do usuário" />
          
          <label htmlFor='avatar'>
            <FiCamera />

            <input 
              id='avatar' 
              type='file' 
            />
          </label>
          
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  );
}