import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                CRUD
              </a>
              <Navigation />
            </nav>
          </header>
          <main className="container mx-auto px-4 py-8 flex-grow">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

function Navigation() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <>
          <span className="text-sm text-gray-700">{user.name}</span>
          <a href="/users" className="text-blue-600 hover:text-blue-800">
            Usuarios
          </a>
          <button
            onClick={signOut}
            className="text-base bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <a href="/login" className="text-blue-600 hover:text-blue-800">
          Iniciar sesión
        </a>
      )}
    </div>
  );
}

export default App;
