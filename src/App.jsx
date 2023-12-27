import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import "./index.css";

// Layout

import Layout from "./layout/Layout";

// Pages

import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";

import Programs from "./pages/Programs";

import Membership from "./pages/Membership";

import Testimonials from "./pages/Testimonials";

// Account
import AccountLayout from "./layout/AccountLayout";

import Account from "./components/Account";

import Personalization from "./pages/profile/Personalization";


// 404

import NoPage from "./pages/NoPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NoPage/>}>
      <Route index element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="programs" element={<Programs/>} />
      <Route path="membership" element={<Membership/>} />
      <Route path="testimonials" element={<Testimonials/>} />

<Route path="account" element={<AccountLayout/>}>
<Route index element={<Account/>}/>
<Route path="account/edit-profile" element={<Personalization/>}  />
<Route/>
<Route/>
</Route>

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
