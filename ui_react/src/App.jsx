import { React, lazy} from 'react'
import { BrowserRouter, Form } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'
import { Suspense } from 'react'
import Loan from './pages/Shared/Loan'
import Terms from './pages/Terms'
import LoanPlan from './pages/Admin/LoanPlan'
const Profile=lazy(()=>import('./pages/Shared/Profile'))
const ApplicationForm=lazy(()=>import('./pages/Shared/ApplicationForm'))
const Contact=lazy(()=>import('./pages/Contact'))
const Login=lazy(()=>import('./pages/Auth/Login'))
const Dashboard=lazy(()=>import('./pages/Admin/Dashboard'))
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback="Loading..">
    <Routes>
      <Route element={<Weblayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/apply' element={<ApplicationForm/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/plans' element={<LoanPlan/>}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App