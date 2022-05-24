import React from 'react';
import ReactDOM from 'react-dom/client';
import Map from './components/Map/Map'
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Instructions from './pages/Instructions';
import awsExports from './aws-exports';
import Amplify, {API} from 'aws-amplify'

Amplify.configure(awsExports);

// import * as AWS from 'aws-sdk';
// import { ConfigurationOptions } from 'aws-sdk'


// const configuration = {
//   region: "us-west-1",
//   secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
// };

// AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes >
        <Route path="" element={<Map />} />
        <Route path="about" element={<About />} />
        <Route path="instructions" element={<Instructions />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
