import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RelatedCard from './Component/RelatedCard'
import Bedroom from './Pages/Bedroom'
import ProductDetail from './Pages/ProductDetail'
import PageTransition from './Component/PageTransition'
import Lounge from './Pages/Lounge'
import Closet from './Pages/Closet'


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
          <Route path='/room/bedroom' element={<PageTransition><Bedroom/></PageTransition>}/>
          <Route path='/room/nairobi-apparel-district' element={<PageTransition><Lounge/></PageTransition>}/>
          <Route path='/room/closet' element={<PageTransition><Closet/></PageTransition>}/>
          <Route path="/shop/products" element={<PageTransition><RelatedCard/></PageTransition>}/>
          <Route path="/shop/products/:id" element={<PageTransition><ProductDetail/></PageTransition>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App