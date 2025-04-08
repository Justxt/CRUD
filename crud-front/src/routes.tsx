import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import UserListView from './views/UserListView';
import UserCreateView from './views/UserCreateView';
import UserEditView from './views/UserEditView';
import UserDetailView from './views/UserDetailView';
import LoginView from './views/auth/LoginView';
import RegisterView from './views/auth/RegisterView';
import PrivateRoute from './components/auth/PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      
      {/* Rutas protegidas */}
      <Route path="/users" element={
        <PrivateRoute>
          <UserListView />
        </PrivateRoute>
      } />
      <Route path="/users/create" element={
        <PrivateRoute>
          <UserCreateView />
        </PrivateRoute>
      } />
      <Route path="/users/edit/:id" element={
        <PrivateRoute>
          <UserEditView />
        </PrivateRoute>
      } />
      <Route path="/users/:id" element={
        <PrivateRoute>
          <UserDetailView />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;