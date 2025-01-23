import { Outlet } from "react-router-dom";

// Components
import NavBar from "../components/navbar/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <NavBar></NavBar>
        </header>

        <main>
          <Outlet></Outlet>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
