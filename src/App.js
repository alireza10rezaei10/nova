import React from "react";
import AppRoutes from "./router/AppRoutes";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
