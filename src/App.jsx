import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom'
import Home from"./Pages/Home"
import About from "./Pages/About"
import Contact from './components/Contact'
import NotFound from './Pages/NotFound'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList';
import Projects from "./Pages/Porjects"
import ReactProjects from "./Pages/ReactProjects"
import Next from "./Pages/Next"

import Javascript from "./Pages/Javascript"

const App = () => {
  return (
    <div>
      <Header/>
              {/* routes is like swith case  */}
         <Routes>
           {/* Routes is like switch case in JS to check matching url and will load that component when a matcing one found */}
          {/* by default route has 2 props ,path,element */}
{/*             <Route path="/" element={<h1>Home Page </h1>}/> */}
{/* just one rote open */}
            <Route path="/" element={<Home/>}/>      
            <Route path="/about" element={<About/>}/> {/* make root  matching  url not case sensetiv */}
             
             <Route path="/contact" element={<Contact/>}/>
        {/* i need to now this value id there is hook for now that :what ever after here it will be inside param */}
             
        <Route path="/product" element={<ProductList />} />
             
              <Route path="/product/:productId" element={<Product/>}/>
              {/* when i search on spesific product/3  :*/}
              {/* dynamic end points,  we use colomn to create dynamic end points. whatever comes after : is ok. and for all of them the same page will be loaded */}
              
              
              {/* nested roputes */}
              <Route path="/projects" element={<Projects />} >
                   {/* inside the nested routes use routes without forward slash */}
                   {/* outlet is one of them i dont now wich one react know */}
                          {/* index if i t render both of them projects and reactprojects */}
                   <Route index element={<ReactProjects />} />
                    <Route path="next" element={<Next />} />
                    <Route path="javascript" element={<Javascript />} />
              </Route>
              <Route path="*" element={<NotFound/>}/>
               {/* shoud be at the end i have to ,the user enter url not in our page (try to rach a random adress) here here we need to warning him that url not found */}

         </Routes>


      <Footer/>
    </div>
  )
}

export default App
/* rafce */
/* in main endpoint */
/* we have header  and footer in all the pages */