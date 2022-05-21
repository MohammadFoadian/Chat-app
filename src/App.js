import React from 'react';
import {Routes , Route } from "react-router-dom"

// components
import Login from './components/Login';
import Chat from './components/Chat';

// contrext
import AuthContextProvider from './context/AuthContextProvider';

const App = () => { 
  return (
    <div>
      <AuthContextProvider>
      <Routes> {/* 2 */}

        <Route path='/' element={<Login />}></Route> {/* 3 */}
        <Route path='/chats' element={<Chat />}></Route>

      </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;