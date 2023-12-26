import {
createBrowserRouter,
createRoutesFromElements,
Route, 
RouterProvider
} from 'react-router-dom'

import { Heading } from "@chakra-ui/react"

import './index.css';

// Layout

import Layout from './layout/Layout';

// Pages

import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
<Route index element={<Home/>}/>
<Route/>
<Route/>
<Route/>
<Route/>
    </Route>
  )
)



const App = () => {
  return(
 <RouterProvider router={router}/>
  )
}

export default App