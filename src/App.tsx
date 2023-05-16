import React, { useEffect } from 'react';
import './App.css';

import { Route, Routes, useNavigate } from 'react-router';
import { useAppSelector } from './hooks/reduxHooks';

import Chat from './Pages/Chat';
import AuthPath from './Pages/AuthPath';



function App() {
  const navigate = useNavigate();
  const {apiTokenInstance, idInstance} = useAppSelector(state=> state.userAuth) 
  useEffect(() => {
    if(!apiTokenInstance && !idInstance) {
      navigate('/');
    }
  }, []);
  

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<AuthPath/>}/>
        <Route path="/Chat" element={<Chat/>}/>
      </Routes>

    </div>
  );
}

export default App;
