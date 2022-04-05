import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import Header from './header/HeaderFC';
import HomePage from './homePage/HomePage';
import PostPage from './postPage/PostPage'

const App: React.FC = () => {
  

  return (
    <BrowserRouter basename='/posts'>
      <Header />
      <Switch>
        <Route path='/' element={<HomePage />}/>
        <Route path='/:slug/comments' element={<PostPage />}/>
        {/* <Route path="/comment/:id" element={<CommentItem />}/> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;

