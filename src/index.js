
import React from "react";

import  ReactDOM  from "react-dom/client";

import {ChakraProvider} from '@chakra-ui/react';

import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render
(
<ChakraProvider>
  <App/>
</ChakraProvider>
)