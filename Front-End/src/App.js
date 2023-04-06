import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import WebsiteForm from "./Pages/WebsiteForm";
import Websites from "./Pages/Websites";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>
        <Route path="/user" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="websites" element={<Websites />} />
          <Route path="websiteform" element={<WebsiteForm />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
