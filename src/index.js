import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter
} from "react-router-dom";

ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
 <Route path='/:userNameUrl?' component={App}></Route>
</BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);


