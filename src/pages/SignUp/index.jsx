import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

export function SignUp() {
  return(
    <Container>
      <BackgroundImg 
        alt='Imagem de uma mesa com um notebook, 
        um bloco de notas, uma 
        caneta e uma caneca com café'
      />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' type="text" icon={FiUser}/>
        <Input placeholder='E-mail' type="text" icon={FiMail} />
        <Input placeholder='Senha' type="password" icon={FiLock}/>

        <Button title='Cadastrar'/>

        <a href="">Voltar para o login</a>
      </Form>
    </Container>
  )
}