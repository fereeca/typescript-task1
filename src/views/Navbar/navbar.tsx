import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="nav-container">
          {/* <NavLink to={"/"}>Home</NavLink> */}
          <div className="title">Assignment</div>
          <NavLink to={"/task1"}>Task1</NavLink>
          <NavLink to={"/task2"}>Task2</NavLink>
          <NavLink to={"/task3"}>Task3</NavLink>
          <NavLink to={"/task4"}>Task4</NavLink>
          <NavLink to={"/task5"}>Task5</NavLink>
          <NavLink to={"/task6"}>Task6</NavLink>
        </div>
        <main className="ans-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Navbar;
