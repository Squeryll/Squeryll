import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Connection from './pages/Connection'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connection />} />
      </Routes>
    </Router>
  )
}

export default App
