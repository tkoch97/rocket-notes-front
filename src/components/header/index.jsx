import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
  return(
    <Container>

      <Profile to="/profile">
        <img 
          src="https://github.com/tkoch97.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo(a),</span>
          <strong>Thiago Koch</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}