import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import ScrollToTop from './helpers/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/hauntedkeyhunt' element={<Project projectId={0} />} />
          <Route exact path='/tabletalk' element={<Project projectId={1} />} />
          <Route exact path='/radio-app' element={<Project projectId={2} />} />
          <Route
            exact
            path='/interaction-design'
            element={<Project projectId={3} />}
          />
          <Route exact path='/puzzle' element={<Project projectId={4} />} />
          <Route exact path='/portfolio' element={<Project projectId={5} />} />
          <Route exact path='/weathermap' element={<Project projectId={6} />} />
          <Route
            exact
            path='/cook-togheter'
            element={<Project projectId={7} />}
          />
          <Route
            exact
            path='/beer-labels'
            element={<Project projectId={8} />}
          />
          <Route exact path='/garmaqua' element={<Project projectId={9} />} />
          <Route exact path='/student-of-the-year' element={<Project projectId={10} />} />
          <Route exact path='/solwe' element={<Project projectId={11} />} />
          <Route path='/goodtechhack' element={<Project projectId={12} />} />
          <Route path='/nasa-hackathon' element={<Project projectId={13} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
