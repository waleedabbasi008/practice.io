import React from "react";
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NewApp from "./NewApp";
ReactDom.render(
   <>
      <BrowserRouter>
         <NewApp />
      </BrowserRouter>

   </>,
   document.getElementById("root")
);
