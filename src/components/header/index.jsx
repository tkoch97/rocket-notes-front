import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/img/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom';


export function Header() {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const AvatarUrl = user.avatar ? `
  ${api.defaults.baseURL}/files/${user.avatar}
  ` : avatarPlaceHolder;

  const navigate = useNavigate();
  
  function handleSignOut() {
    signOut();
    navigate("/");
  }

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

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}