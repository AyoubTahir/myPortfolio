import { Routes, Route } from 'react-router-dom';
import FullLayout from './layouts/full/FullLayout';
import MainLayout from './layouts/main/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/errors/notFound/NotFound';
import Login from './pages/login/Login';
import ProjectsList from './pages/projects/projectsList/ProjectsList';
import NewProject from './pages/projects/newProject/NewProject';
import EditProject from './pages/projects/editProject/EditProject';
import { AuthProvider } from './contexts/AuthProvider';
import Portfolio from './pages/client/portfolio/Portfolio';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/admin'>
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='projects' >
              <Route index element={<ProjectsList />} />
              <Route path='new' element={<NewProject />} />
              <Route path='edit/:id' element={<EditProject />} />
            </Route>
          </Route>
          <Route path='login' element={<FullLayout />}>
            <Route index element={<Login />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/'>
          <Route index element={<Portfolio />}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
