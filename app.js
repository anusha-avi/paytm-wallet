import React, {useState,useEffect } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "...react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Transaction from './Pages/Transaction';
import { Navbar,Nav,Container,NavDropdown, NavbarBrand } from "react-bootstrap";

function App() {
    const [isOpen,setIsOpen]= useState(false);
    const [user,setUser]=useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

  return(
      <div>
          <Router>
             <div>
                 <Navbar bg="primary" variant="dark" expand="md" sticky="top">
                  <Container>
                    <Navbar.Brand as={Link} to="/">Fast-Pay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                      <Nav ClassName="ml-auto">
                        {user ? (
                          <>
                          <Nav.Link as={Link} to="/transaction">Home</Nav.Link>
                             <NavDropdown.Item onClick={handleLogout}></NavDropdown.Item>
                    
                          </>
                        ) : (
                            <>
                              <Nav.Link as={Link} to="/login"></Nav.Link>
                              <Nav.Link as={Link} to="/signup"></Nav.Link>
                            </> 
                        )}
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                 </Navbar>
                 <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/logic" element={<login />} />
                     <Routes path="/signup" element={<signup />} />
                     <Routes path="/transaction"element={<transaction />} />
                 </Routes>
             </div>
          </Router>
      </div>
  );
}

export default App;