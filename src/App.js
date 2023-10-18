import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Numbers from "./component/Counders";
import Services from "./component/Services";
import Footer from "./component/Footer";
import ContactUs from "./component/Contact";
import BlogPage from "./component/Blog";
import Header from "./component/Header";

const App = () => {
  return (
    <div className="w-full h-fit bg-white flex flex-col">
      <Header />
      <Nav />
      <Home />
      <About />
      <Numbers />
      <Services />
      <BlogPage />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
