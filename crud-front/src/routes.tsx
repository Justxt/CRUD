import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import UserListView from './views/UserListView';
import UserCreateView from './views/UserCreateView';
import UserEditView from './views/UserEditView';
import UserDetailView from './views/UserDetailView';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserListView />} />
      <Route path="/users/create" element={<UserCreateView />} />
      <Route path="/users/edit/:id" element={<UserEditView />} />
      <Route path="/users/:id" element={<UserDetailView />} />
    </Routes>
  );
}

export default AppRoutes;