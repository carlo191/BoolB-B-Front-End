import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <header></header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
