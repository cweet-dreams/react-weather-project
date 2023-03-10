import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <App  defaultCity={'Paris'}/>
      <small>
         <a href="https://github.com/cweet-dreams/weather-react-ui">Open-source code</a>  by  <a href='https://www.linkedin.com/in/svetlana-apolokhova-b5772a56/'> Svetlana Apolokhova</a> and  <a href='https://startling-griffin-bd3d6b.netlify.app/'>  hosted on Netlify.</a>
         </small>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
