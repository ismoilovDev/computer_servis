import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'



function Sidebar() {
   return (
      <div className='sidebar'>
         <div className='logo'>
            Logo
         </div>
         <div className='routers'>
            <div className='route'>
               <span className='route_title'>
                  КАТЕГОРИИ
               </span>
               <ul>
                  <li>
                     <Link to="/add-category">
                        Добавление
                     </Link>
                  </li>
                  <li>
                     <Link to="/categories">
                        Категории
                     </Link>
                  </li>
               </ul>
            </div>
            <div className='route'>
               <span className='route_title'>
                  ПРОДУКТЫ
               </span>
               <ul>
                  <li>
                     <Link to="/add-product">
                        Добавление
                     </Link>
                  </li>
                  <li>
                     <Link to="/products">
                        Продукты
                     </Link>
                  </li>
               </ul>
            </div>
            <div className='route'>
               <span className='route_title'>
                  КЛИЕНТЫ
               </span>
               <ul>
                  <li>
                     <Link to="/add-client">
                        Добавление
                     </Link>
                  </li>
                  <li>
                     <Link to="/clients">
                        КЛИЕНТЫ
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Sidebar