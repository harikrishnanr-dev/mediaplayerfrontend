import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>
          <FontAwesomeIcon icon={faVideo} style={{color: "#FFD43B",}} className='me-3' />
            <span className='text-white'>Media Player</span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header