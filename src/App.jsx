import { GlobalProvider } from "./contex/GlobalContex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="*" element={""}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
