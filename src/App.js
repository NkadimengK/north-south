import React from "react";
import { Route, Routes } from "react-router-dom";
import { Switch } from "react-router";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import InternetArt from "./pages/InternetArt";
import About from "./pages/About";
import HomeNav from "./components/HomeNav";
//Components
import DigitalDivide from "./components/NorthArticles/DigitalDivide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/internet-art" element={<InternetArt />}></Route>

        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />}></Route>


        {/*####################Blogs##################*/}
        <Route path="/Digital-Divide" element={<DigitalDivide />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
