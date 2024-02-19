import React from 'react';
import ReactDOM from 'react-dom/client';
import Landingpage from './Landing';
// import Form from './app';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Routings from './Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Form/> */}
    <Landingpage/>
    <Routings/> 
  </>
);

