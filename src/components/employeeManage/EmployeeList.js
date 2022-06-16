import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Footer from "../layout/Footer";

function EmployeeList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [items_2, setDesignation] = useState([]);

  let [Name, setname] = useState("");

  const handleDsignation_value = (event) => {
    setname(event.target.value);
    // console.log(event.target.value + "___designation id ");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ designationIds: event.target.value }),
    };
    fetch("http://localhost:5000/admin/employee_list", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);

          setItems(result.data);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch("http://localhost:5000/admin/employee_list", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.data);
          setIsLoaded(true);
          setItems(result.data);
          setDesignation(result.data2);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <React.Fragment>
      <div className="emplink">
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Tables / General - NiceAdmin Bootstrap Template</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        \
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
        <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="assets/vendor/simple-datatables/style.css"
          rel="stylesheet"
        />
        <link href="assets/css/style.css" rel="stylesheet" />
      </div>

      <main id="main" className="main">
        {/* this is date picker  */}
        {/* <DateRangePicker
            ranges={[selectionRange]}
            onChange={this.handleSelect}
            // navigatorRenderer={this.handlechange_filter}
            // onChange={this.handlechange_filter}
            // onBlur = {this.handlechange_filter}
          /> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Team Members </h5>
                  <div className="col-3" style={{ float: "right" }}>
                    <Button
                      type="button"
                      className="btn btn-dark "
                      // onClick={this.routeChange}
                      style={{ float: "right" }}
                    >
                      Add Employee_mis 2
                    </Button>
                  </div>

                  <div className="col-2">
                    <select
                      className="form-select form-select-sm mb-2"
                      onChange={handleDsignation_value}
                      // style={{ float: "right" }}
                      style={{ border: "none" }}
                    >
                      value={Name}
                      <option value="0">Select Position</option>
                      {items_2.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                      {/* {items.map((item) => (
                        <option
                          key={item.designations_All._id}
                          value={item.designations_All._id}
                        >
                          {item.designations_All.name}
                        </option>
                      ))} */}
                      {/* {items_2.map((item) => (
                        <option
                          key={item._id}
                          value={item._id}
                        >
                          {item.name}
                        </option>
                      ))} */}
                    </select>
                  </div>

                  <div></div>

                  <table className="table">
                    <thead>
                      <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Position</th>
                        <th scope="col">Department</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <>
                          <tr>
                            <td>
                              {item.firstName} {item.lastName}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.employeedetails.phoneNumber}</td>
                            <td>{item.designations.name}</td>

                            <td></td>

                            {/* <td>
                              {Moment(item.employeedetails.birthDate).format(
                                "DD MMM YYYY"
                              )}
                            </td> */}
                            <td>
                              <Menu
                                menuButton={
                                  <span class="bi bi-three-dots-vertical"></span>
                                }
                              >
                                <MenuItem
                                // onClick={Get_emp(items_2._id)}
                                // onClick={this.get_emp.bind(this, item._id)}
                                >
                                  Edit
                                </MenuItem>
                                <MenuItem
                                // onClick={this.approve.bind(this, item._id)}
                                // onClick={this.delete_emp}
                                // onClick={this.delete_emp.bind(this, item._id)}
                                >
                                  Delete
                                </MenuItem>
                              </Menu>
                            </td>
                          </tr>
                        </>
                      ))}

                      {/* {items.map((item) => (
                          <tr>
                            <th scope="row">1</th>
                            <td> {item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>
                              {Moment(item.employeedetails.birthDate).format(
                                "DD MMM YYYY"
                              )}
                            </td>

                            <td>
                              <Menu
                                menuButton={
                                  <span class="bi bi-three-dots-vertical"></span>
                                }
                              >
                                <MenuItem
                                  // onClick={this.approve.bind(this, item._id)}
                                  // onClick={this.delete_emp}
                                  onClick={this.delete_emp.bind(this, item._id)}
                                >
                                  Delete
                                </MenuItem>
                                <MenuItem
                                  onClick={this.get_emp.bind(this, item._id)}
                                >
                                  Edit
                                </MenuItem>
                              </Menu>
                            </td>
                          </tr>
                        ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default EmployeeList;
