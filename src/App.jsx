import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PresentationProvider } from './contexts/PresentationContext'
import Article from './pages/article/Article'
import './App.scss'

function App() {
  return (
    <PresentationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/article/:title" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </PresentationProvider>
  )
}

export default App
