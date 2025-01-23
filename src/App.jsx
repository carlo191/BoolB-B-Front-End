import { BrowserRouter, Route, Routes } from "react-router-dom";

// Global Var
import { GlobalProvider } from "./contex/GlobalContex";

// Default Layout
import DefaultLayout from "./layout/DefaultLayout";

//Components
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
