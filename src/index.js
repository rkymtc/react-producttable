import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NoMatch from './component/NoMatch/NoMatch';
import PostDetails from './component/product/PostDetails';
import List from './component/product/List';
import Login from './component/form/Login';
import Add from './component/new/AddNew';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route index element={<Login />}></Route>

      <Route path='/' element={<App />}>
      <Route path='/newAdd' element={<Add />}></Route>
        <Route path='/post' element={<List />}></Route>
        <Route path='/postdetails/:id' element={<PostDetails />}> </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>

  ,
  document.getElementById('root')
);
