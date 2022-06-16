
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import  {SidebarData}  from '../layout/SidebarData'
import SubMenu from '../layout/SidebarMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  // background: #15171c;
  background: white;
  //  left side bar colour
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <IconContext.Provider value={{ color: '#414757' }}>
        {/* <Nav>
          
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}

<SidebarNav sidebar={showSidebar} >
        {/* <SidebarNav sidebar={sidebar} > */}
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;



// import React, { Component } from "react";
// // import ComponentAccordian from "./components-accordion";
// import { NavLink } from "react-router-dom";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// class Sidebar extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <aside id="sidebar" class="sidebar">
//             <ul class="sidebar-nav" id="sidebar-nav">
//               {/* <li class="nav-item">
//                 <a class="nav-link " href="index.html">
//                   <i class="bi bi-grid"></i>
//                   <span>Dashboard</span>
//                 </a>
//               </li> */}
//               {/* <li class="nav-item">
//                 <NavLink class="nav-link" to="/home">
//                 <i className="bi bi-grid"></i>
//                 <span>Dashboard</span>
                  
//                 </NavLink>
//             </li> */}
//               <li class="nav-heading">Pages</li>
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/pages-profile">
//                   <i class="bi bi-person"></i>
//                   <span>Profile</span>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/emplist">
//                   <i class="bi bi-file-earmark"></i>
//                   <span>EmployeeList</span>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/LeaveList">
//                   <i class="bi bi-card-list"></i>
//                   <span>Manage Leaves</span>
//                   <Navbar variant="light" bg="ligth" expand="lg">
//                     <Container fluid>
//                       {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//                       <Navbar.Toggle aria-controls="navbar-dark-example" />
//                       <Navbar.Collapse id="navbar-dark-example">
//                         <Nav>
//                           <a
//                             class="nav-link nav-profile d-flex align-items-center pe-0"
//                             href="#"
//                             data-bs-toggle="dropdown"
//                           >
//                             {/* <img
//                               src={display_img}
//                               alt="Profile"
//                               class="rounded-circle"
//                             /> */}
//                           </a>
//                           <NavDropdown
//                             id="nav-dropdown-dark-example"
//                             // title={object.firstName}
//                             color="black"
//                             menuVariant="light"
//                           >
//                             <NavDropdown.Item href="/AddLeave">
//                               Add Leaves
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="/LeaveList">
//                               Leaves List
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="/">
//                               Leaves Details
//                             </NavDropdown.Item>
//                             {/* <NavDropdown.Item onClick={this.logout}>
//                               Log Out{" "}
//                             </NavDropdown.Item> */}
//                           </NavDropdown>
//                         </Nav>
//                       </Navbar.Collapse>
//                     </Container>
//                   </Navbar>
//                 </a>
//               </li>{" "}
//               {/* <li class="nav-item">
//                 <NavLink class="nav-link" to="/pages-register">
//                   <i class="bi bi-card-list"></i>
//                   <span>Register</span>
//                 </NavLink>
//               </li> */}
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/reportlist">
//                   <i class="bi bi-dash-circle"></i>
//                   <span>Monthly Report</span>
//                 </a>
//               </li>{" "}
              
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/pages-register">
//                   <i class="bi bi-card-list"></i>
//                   <span>Register</span>
//                 </a>
//               </li>{" "}
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/">
//                   <i class="bi bi-box-arrow-in-right"></i>
//                   <span>Login</span>
//                 </a>
//               </li>{" "}
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/pages-contact">
//                   <i class="bi bi-envelope"></i>
//                   <span>Contact</span>
//                 </a>
//               </li>{" "}
//               <li class="nav-item">
//                 <a class="nav-link collapsed" href="/pages-error">
//                   <i class="bi bi-dash-circle"></i>
//                   <span>Error 404</span>
//                 </a>
//               </li>{" "}
            
//             </ul>
//           </aside>
//         </div>
//       </>
//     );
//   }
// }

// export default Sidebar;
