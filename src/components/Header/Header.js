import React from 'react';
import './Header.css';
import { Col, Row } from 'react-bootstrap';
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";


function Header() {
   return (
      <div className='header'>
         <Row>
            <Col xs="6">
               <div className='menu'>
                  <IoIosMenu />
               </div>
            </Col>
            <Col xs="6">
               <div className='role'>
                  <FaUserCircle />
               </div>
            </Col>
         </Row>
      </div>
   )
}

export default Header;