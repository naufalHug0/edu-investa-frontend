import { Navigate, Route, Routes } from 'react-router'
import { Auth, NotFound } from './public'
import { EduGames, EduSkills, Home, Simulasi, EduShorts, Profile, EduCourse } from './private'
import { AuthenticatedWrapper, PrivateRoute, PublicRoute } from '../features/authentication/components'
import Modal from '../components/modal'

function App() {
  return (
    <>
    <Modal/>
    <Routes>
      <Route path='/' element={<PublicRoute/>}>
        <Route index path='/' element={<Navigate to='/auth'/>}/>
        <Route path='/auth/*' element={<Auth/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
      
      <Route path='/app' element={<PrivateRoute/>}>
        <Route path='*' element={<AuthenticatedWrapper/>}>
          <Route index element={<Home/>} />
          <Route path='profile/*' element={<Profile/>} />
          <Route path='simulasi/*' element={<Simulasi/>} />
          <Route path='edu-skills/*' element={<EduSkills/>} />
          <Route path='quiz/*' element={<EduGames/>} />
          <Route path='shorts/*' element={<EduShorts/>} />
          <Route path='course/*' element={<EduCourse/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Route>

    </Routes>
    </>
  )
}

export default App
