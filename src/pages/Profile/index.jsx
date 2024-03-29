import { useState } from 'react';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/img/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  const AvatarUrl = user.avatar ? `
  ${api.defaults.baseURL}/files/${user.avatar}
  ` : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(AvatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {

    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword 
    }

    const userUpdate = Object.assign(user, updated)

    await updateProfile({user: userUpdate, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const avatarPreview = URL.createObjectURL(file);
    setAvatar(avatarPreview);
  }

  return(
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        
        <Avatar>

          <img src={avatar} alt="Foto do usuário" />
          
          <label htmlFor='avatar'>
            <FiCamera />

            <input 
              id='avatar' 
              type='file'
              onChange={handleChangeAvatar}
            />
          </label>
          
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder={email}
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile}/>
      </Form>
    </Container>
  );
}