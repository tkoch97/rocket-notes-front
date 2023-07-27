import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/img/avatar_placeholder.svg'


export function Header() {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const AvatarUrl = user.avatar ? `
  ${api.defaults.baseURL}/files/${user.avatar}
  ` : avatarPlaceHolder;


  return(
    <Container>

      <Profile to="/profile">
        <img 
          src={AvatarUrl}
          alt={`Foto de ${user.name}`}
        />

        <div>
          <span>Bem-vindo(a),</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}