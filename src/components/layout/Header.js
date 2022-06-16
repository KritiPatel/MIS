import React from 'react'
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    // <div>Header</div>

    <React.Fragment>
        <div>
    <div>Header</div>
    <div class="headerLink">
      <head>
        <meta charset="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        />

        <title>MIS </title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="assets/img/favicon.png" rel="icon" />
        <link
          href="assets/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />

        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
        <link
          href="assets/vendor/quill/quill.bubble.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/remixicon/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/simple-datatables/style.css"
          rel="stylesheet"
        />

        <link href="assets/css/style.css" rel="stylesheet" />
      </head>
      <header
        id="header"
        class="header fixed-top d-flex align-items-center"
      >
        <div class="d-flex align-items-center justify-content-between">
          <a 
          // href="index.html" 
          class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />

            <span class="d-none d-lg-block">Moweb MIS</span>
          </a>
          <i class="bi bi-list toggle-sidebar-btn"></i>
          
        </div>

        <div class="search-bar">
          <form
            class="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>

            <li class="nav-item dropdown pe-3">
                
              <Navbar variant="light" bg="ligth" expand="lg">
                <Container fluid>
                  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="navbar-dark-example" />
                  <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                      <a
                        class="nav-link nav-profile d-flex align-items-center pe-0"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          // src={display_img}
                          alt="Profile"
                          class="rounded-circle"
                        />
                      </a>
                      
                      <NavDropdown  class ="bi bi-three-dots-vertical"
                      //  class ="bi bi-three-dots-vertical"
                        id="nav-dropdown-dark-example"
                        // title={object.firstName}
                        color="black"
                        menuVariant="light"
                      >
                        
                        <NavDropdown.Item href="/EditProfile">
                          Edit Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                        // onClick={this.logout}
                        >
                          Log Out{" "}
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </li>
          </ul>
        </nav> 
      </header>
    </div>
  </div>
    </React.Fragment>
  
    
  )
}

export default Header