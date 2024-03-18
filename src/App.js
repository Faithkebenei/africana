import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pageUrl from "./routes/pageUrl";
import {
  Home,
  About,
  Accommodation,
  Conference,
  Contact,
  Dining,
  Careers,
} from "./pages/pages";

const RouteManager = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={pageUrl.HOMEPAGE} element={<Home />} />
          <Route exact path={pageUrl.ABOUTPAGE} element={<About />} />
          <Route
            exact
            path={pageUrl.ACCOMMODATIONPAGE}
            element={<Accommodation />}
          />
          <Route exact path={pageUrl.CONFERENCEPAGE} element={<Conference />} />
          <Route exact path={pageUrl.CONTACTPAGE} element={<Contact />} />
          <Route exact path={pageUrl.DININGPAGE} element={<Dining />} />
          <Route exact path={pageUrl.CAREERSPAGE} element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RouteManager />
    </div>
  );
};

export default App;
