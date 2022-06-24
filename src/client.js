import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Content from './pages/Content';
import NotFound from './pages/NotFound';
import Header from './components/Header';


import Routes from './Routes';


ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(Routes)}
    {/* 另外寫法 */}
    {/* <Header/>
    <Route path = "/" component = {Content}/>
    <Route path = "/otherPage" component = {Content}/> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
