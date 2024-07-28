import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoriesSection from './components/CategoriesSection/CategoriesSection'
import Header from './components/Header/Header'
import MenuProduct from './components/MenuProduct/MenuProduct'



function App() {

  return (
   
    <div id="menu-page" class="page" style={{display:'flex',flexDirection: 'column', top:' 0px' }}>
     
     
     <header id="sticky-header">
     <Header />
     <CategoriesSection />
     
     </header>

     <Routes>
       <Route path="/" element={<MenuProduct/>}/>
      <Route path="*" element={<h1>Not found</h1>} />
     </Routes>

    
     
     </div>
   
  )
}

export default App
