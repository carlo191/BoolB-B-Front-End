import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <header></header>
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
