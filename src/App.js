import BuyNow from "./components/BuyNow/BuyNow";
import Editions from "./components/Editions/Editions";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import SpecialEdition from "./components/SpecialEditions/SpecialEditions";
import Footer from "./components/Footer/Footer";
import AllBlogListing from "./components/AllBlogListing/AllBlogListing";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogContents from "./components/BlogContent/BlogContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <BuyNow />
              <Editions />
              <Blog />
              <SpecialEdition />
              <Footer />
            </>
          }
          />
          <Route path="/blog/:id" element={<BlogContents/>} />
          <Route path="/blogs" element={<AllBlogListing/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
