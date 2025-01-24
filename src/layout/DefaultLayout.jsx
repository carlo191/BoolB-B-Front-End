import { Outlet } from "react-router-dom";

// Components
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
