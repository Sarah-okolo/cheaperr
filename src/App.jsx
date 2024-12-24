import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/ui/header'
import Products from "./pages/Products"
import ComparePrices from "./pages/ComparePrices"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/compare-prices" element={<ComparePrices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App