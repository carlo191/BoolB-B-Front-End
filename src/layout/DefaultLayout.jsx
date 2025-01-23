import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navbar/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
