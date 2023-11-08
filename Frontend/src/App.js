import {
  BrowserRouter as Router,

  Route,

  Routes,

} from 'react-router-dom'

import HomePage from './components/pages/homePage';
import Header from './components/_basic/header';
import NewtworkComponent from './components/pages/networkComponent';
import ArticleComponent from './components/pages/articleComponent';
import AdminPage from './components/pages/admin/adminPage';
import PrivateRoute from './components/_basic/privateRouter';
import AdminPageMain from './components/pages/admin/adminPageMain';
import ReadRequest from './components/pages/admin/readRequestPage';
import EditNetworks from './components/pages/admin/editNetwork';
import ArticlePages from './components/pages/ArticlePages';
import EditNews from './components/pages/admin/editNews';
import { useState, useRef } from 'react';
import EditArtCard from './components/pages/admin/editArtCard';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <HomePage  />
        } />
        <Route path='/networks' element={
          <NewtworkComponent></NewtworkComponent>
        } />
        <Route path='/article/:id' element={
          <ArticleComponent />
        } />
        <Route path='/admin' element={
          <AdminPage state={isAuthenticated} setState={setIsAuthenticated} />
        } />
        <Route path='/admin/main' element={
          <PrivateRoute component={AdminPageMain} isAuthenticated={isAuthenticated} />
        } />
         <Route path='/admin/read' element={
          <PrivateRoute component={ReadRequest} isAuthenticated={isAuthenticated} />
        } />
         <Route path='/admin/editnews' element={
          <PrivateRoute component={EditNews} isAuthenticated={isAuthenticated} />
        } />
         <Route path='/admin/editnetworks' element={
          <PrivateRoute component={EditNetworks} isAuthenticated={isAuthenticated} />
        } />
           <Route path='/admin/editnews/:id' element={
          <PrivateRoute component={EditArtCard} isAuthenticated={isAuthenticated} />
        } />
         <Route path='/articles' element={
          <ArticlePages></ArticlePages>
        } />


      </Routes>
    </Router>
  );
}

export default App;
