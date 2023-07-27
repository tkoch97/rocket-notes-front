import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import PropTypes from 'prop-types';

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});
  // a função signIn vai ser assíncrona, pois está fazendo contato com o back-end
  // o email e o password vão entre chaves para poder não depender da ordem em que for inserida.
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login.")
      }
    }
  }

  function signOut() {
    const confirmSignOut = confirm("Tem certeza que deseja sair?")
    
    if(confirmSignOut) {
      localStorage.removeItem("@rocketnotes:user");
      localStorage.removeItem("@rocketnotes:token");
      setData({});
    } else {
      return
    }
  }

  async function updateProfile({ user, avatarFile }) {

    try {

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")

    } catch(error) {

      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar.")
      }

    }

  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      updateProfile,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthProvider, useAuth };