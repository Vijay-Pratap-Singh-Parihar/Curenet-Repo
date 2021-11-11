import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Datetime from './components/Datetime';
import curenet from './Images/curenet.png';
import user from './Images/user.jpg';
import Delete from './Images/delete.png';
import Edit from './Images/edit.png';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from '@mui/material';



function App() {
  return (
    <div className="App">

      <div class="topnav">
        <img class="curenet-image" src={curenet} alt="curenet" />
        <div class="topnav-right">
          <div className="datetime">
            <Datetime /></div>
          <div class="user">
            <a href="#profile"><img src={user} alt="user" /></a>
          </div>
          <DropdownButton className="topnav-right" style={{ marginTop: '12px'}}>
            <MenuItem href="#signIn">Sign In</MenuItem>
            <MenuItem href="#signOut">Sign Out</MenuItem>
          </DropdownButton>
        </div>
      </div>

      <Router>
        <Sidebar />
      </Router>
    </div>


  );
}

export default App;
