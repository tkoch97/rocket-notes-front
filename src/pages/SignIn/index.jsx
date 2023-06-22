import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' type="text" icon={FiMail} />
        <Input placeholder='Senha' type="password" icon={FiLock}/>

        <Button title='Entrar'/>

        <a href="">Criar conta</a>
      </Form>

      <BackgroundImg 
        alt='Imagem de uma mesa com um notebook, 
        um bloco de notas, 
        uma caneta e uma caneca com café '
      />
    </Container>
  );
}