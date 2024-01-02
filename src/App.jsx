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

import AccountLayout from "./layout/AccountLayout";

import ProgramLayout from "./layout/ProgramLayout";

// Pages

import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";

import Programs from "./pages/Programs";

import Membership from "./pages/Membership";

import Testimonials from "./pages/Testimonials";

// Account

import Account from "./components/Account";

import Personalization from "./pages/profile/Personalization";


// 404

import NoPage from "./pages/NoPage";

// Programs

import StrengthTraining from "./pages/programs/StrengthTraining";

import BasicYoga from "./pages/programs/BasicYoga";

import BodyBuilding from "./pages/programs/BodyBuilding";

import WeightLoss from "./pages/programs/WeightLoss";


// Router
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

<Route path="programs" element={<ProgramLayout/>}/>
<Route path="strength-training" element={<StrengthTraining/>}/>
<Route path="basic-yoga" element={<BasicYoga/>}/>
<Route path="body-building" element={<BodyBuilding/>}/>
<Route path="weight-loss" element={<WeightLoss/>}/>
</Route>



  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
