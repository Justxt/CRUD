import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/api";

type User = {
  id: string | number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un token guardado al cargar
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        // Configurar axios para incluir el token en todas las peticiones
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      const { access_token, user } = response.data;

      // Guardar en localStorage
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

      setUser(user);
      navigate("/users");
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      setError(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      await axios.post(`${API_URL}/auth/register`, { name, email, password });
      navigate("/login");
    } catch (error: any) {
      console.error("Error al registrarse:", error);
      setError(error.response?.data?.message || "Error al registrarse");
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      navigate("/login");
    } catch (error: any) {
      setError("Error al cerrar sesión");
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
