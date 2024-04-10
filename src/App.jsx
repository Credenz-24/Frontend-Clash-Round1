
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Instruction from './pages/Instruction';
import QuestionMcq from './pages/QuestionMcq';
import Leaderboard from './pages/Leaderboard';
import Result from './pages/ResultPg/component/Result'
import OurTeam from './pages/OurTeam';
import Navbar from "./components/Navbar"
import UserContextProvider from '../context/UserContextProvider';
import PrivateRoute from './components/PrivateRoute'



const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<Login />} />
      <Route path="instruction" element={<Instruction />} />
      <Route path="leaderboard" element={<Leaderboard/>} />
      {/* <Route element={<PrivateRoute />} >
        <Route path="question" element={<QuestionMcq/>} />
        <Route path="result" element={<Result/>} />
        <Route path="Ourteam" element={<OurTeam/>} />
      </Route> */}

      <Route path="question" element={<QuestionMcq/>} />
      <Route path="result" element={<Result/>} />
      <Route path="Ourteam" element={<OurTeam/>} />

      </>
  
  )
)

function App({routes}) {

  return (
    <UserContextProvider>
    <>
      <div className='bg-slate-900'>
      <Navbar></Navbar>
      <RouterProvider router={router}/>
      </div>
    </>
    </UserContextProvider>
  );
}

export default App;

