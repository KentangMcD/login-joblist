import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/home';
import Header from './components/Header';
import JoblistPath from './page/JobListPath';
import JobDescription from './components/JobDescription';
/* eslint-disable react/no-unescaped-entities */
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}></Route>
          <Route path='jobs' element={<Header/> }>
            <Route index element={<JoblistPath/>}/>
            <Route path=':id' element={<JobDescription/>}/>
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
