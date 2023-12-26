import { Route, Routes } from 'react-router'
import { Auth, NotFound, Landing } from './public'
import { EduGames, EduSkills, Home, Simulasi, EduShorts } from './private'
import { PrivateRoute, PublicRoute } from '../features/authentication/components'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute/>}>
        <Route index element={<Landing/>}/>
        <Route path='/auth/*' element={<Auth/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
      
      <Route path='/app' element={<PrivateRoute/>}>
        <Route index element={<Home/>} />
        <Route path='simulasi' element={<Simulasi/>} />
        <Route path='edu-skills/*' element={<EduSkills/>} />
        <Route path='quiz/*' element={<EduGames/>} />
        <Route path='shorts/*' element={<EduShorts/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>

    </Routes>
  )
}

export default App
