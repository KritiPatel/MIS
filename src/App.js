import logo from "./logo.svg";
// import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import EmployeeList from "./components/employeeManage/EmployeeList";
import Login from "./components/login/Login";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom"
// import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Header></Header>
  //   </div>
  // );

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/emp" element={<EmployeeList />} />
          <Route path="/login" element={<Login />} />

          <Route path="/a" element={<Footer />} />
          {/* <Route
                path="/redirect"
                element={ <Navigate to="/error-page" /> }
            /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
