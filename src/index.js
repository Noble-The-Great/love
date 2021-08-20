import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello';
import 'tachyons';
import {Characters} from './character';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Hello picture={Characters[0].picture} name={Characters[0].username} email={Characters[0].email}/>
     <Hello picture={Characters[1].picture} name={Characters[1].username} email={Characters[1].email}/>
      <Hello picture={Characters[2].picture} name={Characters[2].username} email={Characters[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
