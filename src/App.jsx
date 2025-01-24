import { BrowserRouter, Route, Routes } from "react-router-dom";

// Global variables
import { GlobalProvider } from "./context/GlobalContext";

// Default Layout
import DefaultLayout from "./layout/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index element={<HomePage />}></Route>
              <Route path="/property/:id" element={<DetailPage />}></Route>
              <Route path="*" element={""}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
