import React from "react";
import AppRoutes from "./router/AppRoutes";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
