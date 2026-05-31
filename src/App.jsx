import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programs from './pages/Programs'
import RefundPolicy from './pages/RefundPolicy'
import Contact from './pages/Contact'
import Documents from './pages/Documents'
import Tryouts from './pages/Tryouts'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/tryouts" element={<Tryouts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
