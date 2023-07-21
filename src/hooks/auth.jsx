import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});
  // a função signIn vai ser assíncrona, pois está fazendo contato com o back-end
  // o email e o password vão entre chaves para poder não depender da ordem em que for inserida.
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({user, token});

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login.")
      }
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };