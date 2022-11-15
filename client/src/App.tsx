import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import { PageItem, pageList } from './pages/pageList';


function App() {
  
  return (
    <>
      <Routes>
        {
         Object.values(pageList).map((page:PageItem)=><Route path={page.url} element={page.getPageComponent()}/>)
        }
      </Routes>
    </>
  );
}

export default App;
